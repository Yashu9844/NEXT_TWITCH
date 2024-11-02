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

export const blockUser= async(id:string)=>{
    try {
      
        const self = await getSelf()

        const  otherUser = await db.user.findUnique({
            where:{id}
        })
        if(!otherUser){
            throw new Error('User not found')
        }

        if(otherUser.id === self.id){
            throw new Error('Cannot block yourself')
        }

  const existingUser = await db.block.findUnique({
    where:{
        blockedId_blockerId:{
            blockedId:otherUser.id,
            blockerId:self.id
        }
    }
  })

  if(existingUser){
    throw new Error('Already blocked')
  }


  const block = await db.block.create({
    data:{
        blockedId:otherUser.id,
        blockerId:self.id
    },
    include:{
        blocked:true,
    }
  })

  return block;
    } catch (error) {
        throw new Error("Something went wrong")
    }
}

export const unblockUser = async (id: string) => {
    try {
      const self = await getSelf();
  
      const otherUser = await db.user.findUnique({
        where: { id },
      });
  
      if (!otherUser) {
        throw new Error('User not found  nope nope');
      }
  
      const existingUser = await db.block.findUnique({
        where: {
          blockedId_blockerId: {
            blockedId: otherUser.id,
            blockerId: self.id,
          },
        },
      });
  
      if (!existingUser) {
        throw new Error('Not blocked');
      }
  
      const unBlock = await db.block.delete({
        where: {
          id: existingUser.id,
        },
        include: {
          blocked: true,
        },
      });
  
      return unBlock;
    } catch (error:any) {
      console.error("Error in unblockUser:", error);  // Log the original error for debugging
      throw new Error(`Something went wrong: ${error.message}`);
    }
  };