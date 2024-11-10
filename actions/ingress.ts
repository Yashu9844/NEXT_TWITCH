"use server";

import {
  IngressAudioEncodingPreset,
  IngressInput,
  IngressClient,
  IngressVideoEncodingPreset,
  RoomServiceClient,
  type CreateIngressOptions,
  TrackSource,
} from "livekit-server-sdk";

import { db } from "@/lib/db";
import { getSelf } from "@/lib/auth-service";
import { revalidatePath } from "next/cache";

// Initialize LiveKit clients
const apiKey = process.env.LIVEKIT_API_KEY!;
const apiSecret = process.env.LIVEKIT_SECRET_KEY!;
const serverUrl = process.env.NEXT_PUBLIC_LIVEKIT_URL!;

const roomService = new RoomServiceClient(serverUrl, apiKey, apiSecret);
const ingressClient = new IngressClient(serverUrl, apiKey, apiSecret);

/**
 * Create an Ingress for the given input type (WHIP or RTMP).
 * @param ingressType - The type of Ingress input (WHIP or RTMP).
 */

export const resetIngresses = async (hostIdentity: string) => {
  const ingresses = await ingressClient.listIngress({
    roomName: hostIdentity,
  });

  const rooms = await roomService.listRooms([hostIdentity]);

  for (const room of rooms) {
    await roomService.deleteRoom(room.name);
  }

  for (const ingress of ingresses) {
    if (ingress.ingressId) {
      await ingressClient.deleteIngress(ingress.ingressId);
    }
  }
};

export const createIngress = async (ingressType: IngressInput) => {
  try {
    const self = await getSelf();
    await resetIngresses(self.id);

    const options: CreateIngressOptions = {
      name: self.username,
      roomName: self.id,
      participantName: self.username,
      participantIdentity: self.id,
    };

    // Set transcoding options based on ingress type
    if (ingressType === IngressInput.WHIP_INPUT) {
      options.enableTranscoding = true;
    } else {
      options.video = {
        source: TrackSource.CAMERA,
        preset: IngressVideoEncodingPreset.H264_1080P_30FPS_3_LAYERS,
      }as any;
      options.audio = {
        source: TrackSource.MICROPHONE,
        preset: IngressAudioEncodingPreset.OPUS_STEREO_96KBPS,
      }as any;
    }

    // Create the ingress
    const ingress = await ingressClient.createIngress(ingressType, options);
    // console.log("Created ingress:", ingress);

    if (!ingress || !ingress.url || !ingress.streamKey) {
      throw new Error("Failed to create ingress: Missing URL or stream key.");
    }
    const plainIngress = {
      ingressId: ingress.ingressId,
      name: ingress.name,
      streamKey: ingress.streamKey,
      url: ingress.url,
      roomName: ingress.roomName,
      participantName: ingress.participantName,
    };
    // Update the stream information in the database
    await db.stream.update({
      where: { userId: self.id },
      data: {
        ingressId: plainIngress.ingressId,
        serverUrl: plainIngress.url,
        streamKey: plainIngress.streamKey,
      },
    });

    revalidatePath(`/u/${self.username}/keys`);

    // Convert the IngressInfo instance to a plain object
  
    console.log("Updating stream in DB with:", {
      ingressId: plainIngress.ingressId,
      serverUrl: plainIngress.url,
      streamKey: plainIngress.streamKey,
    });
    // console.log("Updating stream in DB with:", plainIngress);

    // Return the plain object to avoid serialization issues
    return plainIngress;
  } catch (error) {
    console.error("Error during ingress creation:", error);
    throw new Error("Ingress creation failed. Please check the server logs for more details.");
  }
};
