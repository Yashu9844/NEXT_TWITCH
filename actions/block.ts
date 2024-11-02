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


export const onUnBlock = async (id: string) => {
    const unBlockUSer = await unblockUser(id);
    revalidatePath("/");
  
    if (unBlockUSer?.blocked?.username) {
      revalidatePath(`/${unBlockUSer.blocked.username}`);
    }
  
    return unBlockUSer;
  };