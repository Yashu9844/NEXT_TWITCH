"use client"

import { useViewerToken } from "@/hooks/UserViewerToken";
import { Stream, User } from "@prisma/client";

interface StreamPlayerProps{
    user:User & {
        stream:Stream | null
    },
    stream:Stream,
    isFollowing:boolean
  
}

const StreamPlayer = ({user,stream,isFollowing} : StreamPlayerProps) => {
  const {token , name,identity} = useViewerToken(user.id)
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
    <div>
      Stream player
    </div>
  );
};

export default StreamPlayer;