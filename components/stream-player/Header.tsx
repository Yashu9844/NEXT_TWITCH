"use client"

import UserAvatar from "@/app/(browser)/_components/sidebar/UserAvatar";
import VErifiedCheckMark from "./VErifiedCheckMark";
import { useParticipants, useRemoteParticipant } from "@livekit/components-react";
import { UserIcon } from "lucide-react";

interface HeaderProps{
    hostName: string;
    imageUrl: string;
    hostIdentity: string;
    viewerIdentity: string;
    isFollowing: boolean;
    name: string;
}

const Header = ({
    hostName,
    imageUrl,
    hostIdentity,
    viewerIdentity,
    isFollowing,
    name,
  
}:HeaderProps) => {

 const participants = useParticipants()

 const participant = useRemoteParticipant(hostIdentity)

 const participantCount = participants.length - 1
 const hostAsViewer = `host-${hostIdentity}`

 const isHost = viewerIdentity === hostAsViewer

 const isLive = !!participant

  return (
    <div className="flex flex-col lg:flex-row gap-y-4 lg:gap-y-0 items-start justify-between px-4">
        <div className="flex items-center gap-x-3">
            <UserAvatar
            imageUrl={imageUrl}
             username={hostName}
             isLive={true} // Assuming the host is live for this example
            size={"lg"}
            showBadge
            />
            <div className="space-y-1">
               <div className="flex items-center gap-x-2">
                <h2 className="text-lg font-semibold" >{hostName}</h2>
                <VErifiedCheckMark/>
                
               </div>
               <p className="text-sm font-semibold">{name}</p>
               {isLive ? (
                <div className="font-semibold flex items-center gap-x-2 text-xs text-rose-500">
                    <UserIcon className="h-4 w-4"/>
                     <p>{participantCount} {participantCount === 1 ? "viewer" : "viewers "}</p>
                </div>
               ):(
                <p className="font-semibold text-xs text-muted-foreground"> Offline</p>
               )}
            </div>
        </div>

      
    </div>
  );
};

export default Header;