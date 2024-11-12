import StreamPlayer from "@/components/StreamPlayer";
import { getUserByUsername } from "@/lib/user-service";
import { currentUser } from "@clerk/nextjs/server";

interface CratorPageProps{
  params:{
    username:string
  }
}


const Page = async ({params}:CratorPageProps) => {
  const exteranlUSer = await currentUser();
  const user = await getUserByUsername(params.username);
if(!user || user.externalUserId !== exteranlUSer?.id || !user.stream){
  throw new Error("Unotherized user")
}

  return (
    <div className="h-full">
      <StreamPlayer
      user={user}
      stream={user.stream}
      isFollowing
      />
    </div>
  );
};

export default Page;