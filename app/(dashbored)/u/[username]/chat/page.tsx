import { getSelf } from "@/lib/auth-service";
import { getUserStreamIdByuserId } from "@/lib/stream-service";
import ToggleBut from "./_components/ToggleBut";
import { notFound } from "next/navigation";
import { useTransition } from "react";
import { updateStream } from "@/actions/stream-update";
import { Skeleton } from "@/components/ui/skeleton";

const ChatPage = async () => {
 
    const self = await getSelf();
    const stream = await getUserStreamIdByuserId(self.id)
 if(!stream) return notFound();


  return (
    <div className="p-6">
      <div className="mb-4">
       <h1 className="text-2xl font-bold"  >Chat Setting</h1>
      </div>
      <div className="space-y-4">
        <ToggleBut
        feild="isChatEnabled"
        value={Boolean(stream?.isChatEnabled)}
        label="Enable Chat"
        />
        <ToggleBut
        feild="isChatDelayed"
        value={Boolean(stream?.isChatDelayed)}
        label="Delay Chat"
        />
        <ToggleBut
        feild="isChatFollowersOnly"
        value={Boolean(stream?.isChatFollowersOnly)}
        label="Must be following Chat"
        />
        
        
      </div>
    </div>
  );
};

export default ChatPage;

export const TogglePageSkeleton = ()=>{
  return(
    <Skeleton  className="p-10 rounded-xl w-full" />
  )
}