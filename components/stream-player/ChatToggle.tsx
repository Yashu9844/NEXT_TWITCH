"use client"

import { useSideBar } from "@/store/use-sidebar";
import Hint from "../hint";
import { ArrowLeftFromLine, ArrowRightFromLine } from "lucide-react";
import { Button } from "../ui/button";
import { useChatSideBar } from "@/store/use-chat-sidebar";

const ChatToggle = () => {
   
    const {collapsed,onCollapse,onExpand} = useChatSideBar((state)=>state)

    const Icon = collapsed ? ArrowLeftFromLine : ArrowRightFromLine
    const label = collapsed? "Expand" : "Collapse";
    const onToggle = () => {
        console.log("Before Toggle: ", collapsed);
        if (collapsed) {
            onExpand();
        } else {
            onCollapse();
        }
        console.log("After Toggle: ", collapsed);
    };
    

     
  return (
    <Hint label={label} side="left" >
      <Button 
      size={"sm"}
      variant={"ghost"}
      onClick={onToggle}
      className="h-auto  pt-2 pb-1 hover:text-primary hover:bg-white/10"
      >
        <Icon className="h-4 w-4"/>
      </Button>
    </Hint>
  );
};

export default ChatToggle;