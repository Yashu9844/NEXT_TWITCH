"use server"

import { blockUser, unblockUser } from "@/lib/block-service"
import { revalidatePath } from "next/cache"

export const onBlock = async (id:string)=>{
    try {

        const blockedUser = await blockUser(id)

        revalidatePath("/")

        if(blockedUser){
            revalidatePath(`/${blockedUser.blocked.username}`)
        }

        return blockedUser
        
    } catch (error) {
        throw new Error("Something went wrong")
    }
}


export const onUnBlockUser = async (id:string) => { 
    try {
         const unBlockUSer = await unblockUser(id)
         revalidatePath("/")

         if(unBlockUSer){
            revalidatePath(`/${unBlockUSer.blocked.username}`)
         }
          
      return unblockUser;

    } catch (error) {
        throw new Error("Something went wrong")
    }
}