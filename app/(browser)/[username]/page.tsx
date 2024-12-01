import { isFollowingUser } from "@/lib/follow-service";
import { getUserByUsername } from "@/lib/user-service";
import Image from "next/image";
import { notFound } from "next/navigation";
import Actions from "./_component/Actions";
import { isBlockedByUser } from "@/lib/block-service";
import StreamPlayer from "@/components/StreamPlayer";

interface UserProps{
    params:{
        username:string;
    }
}


const Page =async ({params} : UserProps) => {

  const user = await getUserByUsername(params.username);
 if(!user || !user.stream ){
   notFound()
 }

  const isFollowing = await isFollowingUser(user.id);
  const isBlockedByUSer = await isBlockedByUser(user.id);

  if(isBlockedByUSer){
    notFound()
  }

  return (
   
   <div className="">
    <StreamPlayer
    user={user}
    stream={user.stream}
    isFollowing={isFollowing}
    
    />
   </div>
  );
};

export default Page;