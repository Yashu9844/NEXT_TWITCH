"use server"


import { getSelf } from '@/lib/auth-service'
import { db } from '@/lib/db'
import {
    IngressAudioEncodingOptions,
    IngressInput,
    IngressClient,
    IngressVideoEncodingOptions,
    RoomServiceClient,
   
    type CreateIngressOptions,
    TrackSource,
    IngressVideoEncodingPreset
} from 'livekit-server-sdk'

const room =  new RoomServiceClient(
    process.env.LIVEKIT_URL!,
    process.env.LIVEKIT_API_KEY!,
    process.env.LIVEKIT_SECRET_KEY!,
 
)

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
    }
}


