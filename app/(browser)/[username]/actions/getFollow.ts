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
   console.error("Error in getFollow:", error); // Logs the specific error details
   throw new Error("Internal error");
 }
}