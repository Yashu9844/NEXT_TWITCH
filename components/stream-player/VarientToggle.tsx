"use client"

import { useSideBar } from "@/store/use-sidebar";
import Hint from "../hint";
import { ArrowLeftFromLine, ArrowRightFromLine, MessageSquare, Users } from "lucide-react";
import { Button } from "../ui/button";
import { ChatVarient, useChatSideBar } from "@/store/use-chat-sidebar";

const VarientToggle = () => {
   
    const {varient,onChangeVarient} = useChatSideBar((state)=>state)

    const isChat = varient === ChatVarient.CHAT

    const Icon = isChat ? Users : MessageSquare

   

  
         const label = isChat? "Community" : "Go back to chat";

         const onToggle =()=>{
            const newVarient = isChat ? ChatVarient.COMMUNITY : ChatVarient.CHAT;
            onChangeVarient(newVarient)
         }
    

     
  return (
    <Hint label={label} side="left" >
      <Button 
      size={"sm"}
      variant={"ghost"}
      onClick={onToggle}
      className="h-auto p-2 hover:text-primary hover:bg-white/10"
      >
        <Icon className="h-4 w-4"/>
      </Button>
    </Hint>
  );
};

export default VarientToggle;