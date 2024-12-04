import { getSelf } from "./auth-service";
import { db } from "./db";


export const getAllStreams = async ()=>{

  let userId;

  try {
    
    const self = await getSelf();
    userId = self.id;

   

  } catch (error) {
    userId = null;
  }


 let streams = []

 if(userId){

 streams = await db.stream.findMany({
    where:{
        user:{
            NOT:{
                blocking:{
                    some:{
                        blockerId:userId
                    }
                }
            }
        }
    },select:{
        user:true,
        thumbnailUrl:true,
        name:true,
        isLive:true,
        id:true
    },
   
 })


 }else{
    streams = await db.stream.findMany({
        select:{
            user:true,
            thumbnailUrl:true,
            name:true,
            isLive:true,
            id:true
        },
        orderBy:[
            {
                isLive:"desc",
            },
            {
                updatedAt:"desc"
            }
        ]
    })
 }

return streams
}