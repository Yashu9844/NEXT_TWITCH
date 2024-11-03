import { isFollowingUser } from "@/lib/follow-service";
import { getUserByUsername } from "@/lib/user-service";
import Image from "next/image";
import { notFound } from "next/navigation";
import Actions from "./_component/Actions";
import { isBlockedByUser } from "@/lib/block-service";

interface UserProps{
    params:{
        username:string;
    }
}


const Page =async ({params} : UserProps) => {
const user = await getUserByUsername(params.username)

if(!user){
  notFound()
}const isFollowing = await isFollowingUser(user.id)
 const isBlockedByUSer =await isBlockedByUser(user.id)
// if(isBlockedByUSer){
//   notFound()
// }

  return (
    <div className="m-4 space-y-4" >
    <div className="flex flex-col gap-5 m-4">
    <p>  username: {user.username}</p>
     <p>  user id : {user.id}</p>
     <p>  id following:{`${isFollowing}`}</p>
     <p>  is Blocked by this User : {`${isBlockedByUSer}`}</p>
    </div>
     <Actions isFollowing={isFollowing} userId = {user.id} />
    </div>
  );
};

export default Page;