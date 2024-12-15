"use server"

import { getSelf } from "@/lib/auth-service";
import { blockUser, unblockUser } from "@/lib/block-service"
import { RoomServiceClient } from "livekit-server-sdk";
import { revalidatePath } from "next/cache"

const apiKey = process.env.LIVEKIT_API_KEY!;
const apiSecret = process.env.LIVEKIT_SECRET_KEY!;
const serverUrl = process.env.NEXT_PUBLIC_LIVEKIT_URL!;

const roomService = new RoomServiceClient(serverUrl, apiKey, apiSecret);

export const onBlock = async (id: string) => {
    const self = await getSelf();
  
    let blockedUser;
  
    try {
      blockedUser = await blockUser(id);
    } catch {
      // This means user is a guest
    }
  
    try {
      await roomService.removeParticipant(self.id, id);
    } catch {
      // This means user is not in the room
    }
  
    revalidatePath(`/u/${self.username}/community`);
  
    return blockedUser;
  };
  

export const onUnBlock = async (id: string) => {
  const self = await getSelf();
    const unBlockUSer = await unblockUser(id);
    revalidatePath("/");
   revalidatePath(`/u/${self.username}/community`);
   
  
    return unBlockUSer;
  };