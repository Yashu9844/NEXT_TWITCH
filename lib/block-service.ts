import { getSelf } from "./auth-service"
import { db } from "./db"


export const isBlockedByUser = async(id:string)=>{
    try {
const self = await getSelf()

const otherUser= await db.user.findUnique({
    where:{id}
})

if(!otherUser){
    throw new Error('User not found')
}

if(otherUser.id=== self.id){
    return false;
}

const existingUSer = await db.block.findUnique({
    where:{
        blockedId_blockerId:{
            blockedId:otherUser.id,
            blockerId:self.id
        }
    }
})

return !!existingUSer;
        
    } catch (error) {
        throw new Error("Something went wrong")
    }
}