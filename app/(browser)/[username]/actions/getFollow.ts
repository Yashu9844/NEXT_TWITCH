"use server"

import { followUSer } from "@/lib/follow-service"
import { revalidatePath } from "next/cache"

export const getFollow = async (id:string)=>{
 try {
    const follow = await followUSer(id)
revalidatePath('/')

if(follow){

   revalidatePath(`/${follow.following.username}`)
}

return follow
      
 } catch (error) {
   throw new Error("Internal error")
 }
}