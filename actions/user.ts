"use server"

import { getSelf } from "@/lib/auth-service"
import { db } from "@/lib/db";
import { User } from "@prisma/client"
import { revalidatePath } from "next/cache";

export const updateUser = async(value:Partial<User>)=>{

    const self = await getSelf();
    if(!self){
        throw new Error('User not authenticated')
    }
   
    const validData = {
        bio:value.bio,
    }

   const user = await db.user.update({
    where:{
        id:self.id
    },
    data:{
        ...validData
    }
   })
 revalidatePath(`/u/${self.username}`)
 revalidatePath(`/${self.username}`)

 return user;



}