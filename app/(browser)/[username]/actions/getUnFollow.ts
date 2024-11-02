"use server"

import { unFollow } from "@/lib/follow-service"
import { revalidatePath } from "next/cache"


export const getUnFollow = async (id:string)=>{
    try {
  const unFollowUser = await unFollow(id)

  revalidatePath('/')

  if(unFollowUser){
    revalidatePath(`/${unFollowUser.following.username}`)
  }
  
return unFollowUser;

        
    } catch (error) {
        throw new Error("Something went wrong")
    }
}