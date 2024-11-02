import { isFollowingUser } from "@/lib/follow-service";
import { getUserByUsername } from "@/lib/user-service";
import Image from "next/image";
import { notFound } from "next/navigation";

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

  return (
    <div>
       username: {user.username}
       user id : {user.id}
       id following:{`${isFollowing}`}
     
    </div>
  );
};

export default Page;