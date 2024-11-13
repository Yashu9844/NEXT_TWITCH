"use client"

import { useChatSideBar } from "@/store/use-chat-sidebar";
import { useChat, useConnectionState, useMediaDeviceSelect, useRemoteParticipant } from "@livekit/components-react";
import { ConnectionState } from "livekit-client";
import { useEffect, useMemo, useState } from "react";
import { useMediaQuery } from "usehooks-ts";
import ChatHeader from "./ChatHeader";

interface ChatProps{
    hostName:string;
    viewerName:string;
    hostIdentity:string;
    isFollowing:boolean;
    isChatEnabeled:boolean;
    isChatDelayed:boolean;
    isChatFollowersOnly:boolean
}

const Chat = ({
hostName,viewerName,hostIdentity,isFollowing,isChatEnabeled,isChatDelayed,isChatFollowersOnly

}:ChatProps) => {

const matches = useMediaQuery('(max-width: 1024px')
const  {varient,onExpand} = useChatSideBar((state)=>state)
const connectionState = useConnectionState()
const participant = useRemoteParticipant(hostIdentity)

const isOnline = participant && connectionState === ConnectionState.Connected

const isHidden = !isChatEnabeled || !isOnline

const [value ,setValue] = useState("")

const {chatMessages:messages , send} =useChat() 

useEffect(()=>{
    if(matches){
        onExpand();
    }
},[matches,onExpand])

const reversedmessages = useMemo(()=>{
    return messages.sort((a,b)=>b.timestamp - a.timestamp)
},[messages])

const onSubmit = ()=>{
    if(!send) return;

    send(value);
    setValue("");
}

const onChange = (value:string)=>{
    setValue(value);
}



  return (
    <div className="flex flex-col bg-background border-l border-b pt-0 h-[calc(100vh-80px)]">
     <ChatHeader/>
     
      Chat
    </div>
  );
};

export default Chat;