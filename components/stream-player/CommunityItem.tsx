"use client"

import { cn, stringToColor } from "@/lib/utils";
import Hint from "../hint";
import { Button } from "../ui/button";
import { MinusCircle } from "lucide-react";
import { useTransition } from "react";
import { onBlock } from "@/actions/block";
import { toast } from "sonner";

interface CommunityItemProps{
    viewerName: string;
    hostName: string;
    participantName?: string | null;
    participantIdentity: string;

}


const CommunityItem = ({
    viewerName,
    hostName,
    participantName,
    participantIdentity,
 
}:CommunityItemProps) => {
    const color = stringToColor(participantName || "")
    const isSelf =participantName === viewerName
    const isHost = participantName === hostName
const [isPending , startTransiton] = useTransition()

  const handleBlock = ()=>{
if(!participantName || !isHost || isSelf) return ;

 startTransiton(()=>{
    onBlock(participantIdentity)
    .then(()=>toast.success(`Blockes ${participantName}`))
    .catch(()=>toast.error("Failed to block"))
 })

  }

  return (
    <div className={cn("group flex items-center justify-between w-full p-2 rounded-md text-sm hover:bg-white/5",
        isPending && "opacity-50 pointer-events-none"
    )}>
    <p style={{color:color}} >
    {participantName}
    </p>
    {isHost && !isSelf  && (
        <Hint label="Block" >
            <Button
            variant={"ghost"}
            disabled={isPending} className="w-auto h-auto p-1 opacity-0 group-hover:opacity-100 transition"
            onClick={handleBlock}
            >
                <MinusCircle className="h-4 w-4 text-muted-foreground"/>
            </Button>
        </Hint>
    )} 
    </div>
  );
};

export default CommunityItem;