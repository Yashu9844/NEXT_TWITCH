import { currentUser } from "@clerk/nextjs/server"
import { db } from "./db"


export const getSelf = async () =>{

    const self = await currentUser()

    if(!self || !self.username ){
        throw new Error('User not authenticated')
    }

    const user = await db.user.findUnique({
        where:{
            externalUserId: self.id,
        }
    })
    
    if(!user){
        throw new Error('User not found')
    }

    return user;
}

export const getSelfUser = async (username:string)=>{

    const self = await currentUser();

    if(!self|| !self.username){
        throw new Error('User not authenticated')
    }

 const user = await db.user.findUnique({
    where:{
        username
    }
 })

 if(!user){
    throw new Error('User not found')
 }

if(user.username !== self.username){
    throw new Error('Unauthorized access')
 
}



 return user
}