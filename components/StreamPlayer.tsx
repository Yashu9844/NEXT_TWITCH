"use client"

import { useViewerToken } from "@/hooks/UserViewerToken";
import { Stream, User } from "@prisma/client";
import {  LiveKitRoom} from '@livekit/components-react'
import Video from "./stream-player/Video";
import { useChatSideBar } from "@/store/use-chat-sidebar";
import { cn } from "@/lib/utils";
import Chat from "./stream-player/Chat";
import ChatToggle from "./stream-player/ChatToggle";

interface StreamPlayerProps{
    user:User & {
        stream:Stream | null
    },
    stream:Stream,
    isFollowing:boolean
  
}


const StreamPlayer = ({user,stream,isFollowing} : StreamPlayerProps) => {
  const {token , name,identity} = useViewerToken(user.id)
  const {collapsed} = useChatSideBar((state)=>state)
 console.log(
  
   "identity: " + identity,
  
 )
 if(!token || !identity || !name){
  return (
    <div>
      Cannot watch the stream...
    </div>
  )
 }

  return (
   <>
{collapsed && (
  
  <div className="hidden lg:block fixed top-[90px] right-4 z-50">
    <ChatToggle/>
  </div>
  )}

    <LiveKitRoom 
    token={token}
    serverUrl={process.env.NEXT_PUBLIC_WS_LIVEKIT_URL}
    className={cn("grid grid-cols-1 lg:gap-y-0 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-6 h-full",
      collapsed &&  "lg:grid-cols-2  xl:grid-cols-2"
    )
    }
    >
      <div className="space-y-4 col-span-1 lg:col-span-2 xl:col-span-2 2xl:col-span-5 lg:overflow-y-auto hidden-scrollbar pb-10">
        <Video
        hostName = {user.username}
        hostIdentity = {user.id}
        
        />
        
      </div>

      {/* // these is the main reason its working here */}
      <div className={cn("col-span-1" , collapsed && "hidden")}> 



        <Chat
        viewerName = {name}
        hostName = {user.username}
        hostIdentity = {user.id}
        isFollowing = {isFollowing}
        isChatEnabeled = {stream.isChatEnabled}
        isChatDelayed = {stream.isChatDelayed}
        isChatFollowersOnly = {stream.isChatFollowersOnly}
        />
      </div>
    </LiveKitRoom></>
  );
};

export default StreamPlayer;