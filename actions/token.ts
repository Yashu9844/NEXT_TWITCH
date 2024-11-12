"use server"

import {v4} from "uuid"
import { AccessToken } from "livekit-server-sdk"
import { getUserByUserId } from "@/lib/user-service"
import { getSelf } from "@/lib/auth-service"
import { isBlockedByUser } from "@/lib/block-service"


export const createVieweToken = async(hostIdentity:string)=>{
let self ;

try {
    self = await getSelf();
} catch (error) {
    const id = v4()
    const username = `guest#:${Math.floor(Math.random()*1000)}`
    self = {id, username}
}

    const host = await getUserByUserId(hostIdentity)

    if(!host){
        throw new Error('Host not found')

        
    }
    const isBolcked = await isBlockedByUser(host.id)

        if(isBolcked) {
            throw new Error('Host is blocked')
        }
        const token = new AccessToken(
            process.env.LIVEKIT_API_KEY!,
            process.env.LIVEKIT_SECRET_KEY!,
            
        )



}