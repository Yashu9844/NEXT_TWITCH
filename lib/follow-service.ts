import { getSelf } from "./auth-service"
import { db } from "./db";


export const isFollowingUser = async(id:string)=>{

    try {
        

const self = await getSelf();

const otherUser = await db.user.findUnique({
    where:{id:id}
})

if(!otherUser){
    throw new Error('User not found')
}

if(otherUser.id  === self.id){
    return true;
}
const existingFollow = await db.follow.findFirst({
    where:{
        followerId:self.id,
        followingId:id
    }
})

return !!existingFollow;


    } catch (error) {
        return false;
    }
}


export const followUSer = async(id:string)=>{

  try {
    
 const self = await getSelf();

 const otherUSer = await db.user.findUnique({
    where:{id:id}
 })

 if(!otherUSer){
     throw new Error('User not found')
 }

 if(otherUSer.id  === self.id){
    throw new Error('Cannot follow yourself')
 }

const existingFollow = await db.follow.findFirst({
    where:{
        followerId:self.id,
        followingId:id
    }
})

if(existingFollow){
    throw new Error('Already following')
}

const follow = await db.follow.create({
  data:{
    followerId:self.id,
    followingId:id
  },
  include:{
    follower:true,
    following:true
  }

})

return follow;


  } catch (error) {
    console.log(error)
  }

}