"use server"


import { getSelf } from '@/lib/auth-service'
import { db } from '@/lib/db'
import {
    IngressAudioEncodingOptions,
    IngressInput,
    
    IngressVideoEncodingOptions,
    RoomServiceClient,
   
    type CreateIngressOptions,
    TrackSource,
    IngressVideoEncodingPreset,
    IngressAudioEncodingPreset,
    IngressClient
} from 'livekit-server-sdk'
import { revalidatePath } from 'next/cache'

const roomService =  new RoomServiceClient(
    process.env.LIVEKIT_URL!,
    process.env.LIVEKIT_API_KEY!,
    process.env.LIVEKIT_SECRET_KEY!,
 
)
const ingressClient = new IngressClient(process.env.LIVEKIT_URL!)
export const ingressCreate = async (ingressType:IngressInput)=>{
    const self = await getSelf()

    const options:CreateIngressOptions={
        name:self.username,
        roomName:self.id,
        participantName:self.username,
        participantIdentity:self.id,
    }

    if(ingressType === IngressInput.WHIP_INPUT){
        options.enableTranscoding  = true 
    }else{
        options.video = {
            source: TrackSource.CAMERA,
            preset: IngressVideoEncodingPreset.H264_1080P_30FPS_3_LAYERS,
        } as any;
        options.audio = {
            source: TrackSource.MICROPHONE,
            preset: IngressAudioEncodingPreset.OPUS_STEREO_96KBPS,
        } as any;
    }
    const ingress = await ingressClient.createIngress(
        ingressType,
        options
    )

    if(!ingress || !ingress.url || !ingress.streamKey){
        throw new Error('Failed to create ingress')
    }

   await db.stream.update({
    where:{
        userId:self.id
    },
    data:{
        ingressId:ingress.ingressId,
        serverUrl:ingress.url,
        streamKey:ingress.streamKey
    }
   })


   revalidatePath(`/u/${self.username}/keys`);
   return ingress;

}


