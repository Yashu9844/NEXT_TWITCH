"use client"

import { useParticipants } from "@livekit/components-react";
import { useState } from "react";
import { useDebounceValue } from "usehooks-ts";
import { Input } from "../ui/input";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import CommunityItem from "./CommunityItem";

interface ChatCommunityProps{
    isHidden: boolean;
    viewerName: string;
    hostName: string;
}


const ChatCommunity = ({
    isHidden,
    viewerName,
    hostName,
  
}:ChatCommunityProps) => {
const [value,setvalue] = useState("")
 const participants = useParticipants()
 const debouncerValue = useDebounceValue(value,500)

 const onChange=(newValue :string)=>{
    setvalue(newValue)
 }
if(isHidden){
    return (
        <div className="flex flex-1 items-center justify-center">
            <p className="text-sm text-muted-foreground">
                Community is disabled
            </p>
        </div>
    )
}
 

  return (
    <div  className="p-4">
       <Input
       onChange={(e)=>onChange(e.target.value)}
       placeholder="Search Community..."
       />
       <ScrollArea className="gap-y-2 mt-4">
        <p className="text-center text-xl text-muted-foreground hidden last:block" >No results</p>
        {participants.map((participant)=>{
            return(
                <CommunityItem
                key={participant.identity}
                viewerName={viewerName}
                hostName={hostName}
                participantName={participant.name}
                participantIdentity={participant.identity}
                
                />
            )
        })}
       </ScrollArea>
    </div>
  );
};

export default ChatCommunity;