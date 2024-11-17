import { cn } from "@/lib/utils";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useStartAudio } from "@livekit/components-react";
import { useState } from "react";
import { isBlockedByUser } from "@/lib/block-service";

interface ChatFormProps{
    isHidden: boolean;
    onSubmit: ()=>void;
    value: string;
    onChange : (value:string)=>void;
    isFollowersOnly :boolean;
    isDelayed : boolean;
    isFollowing: boolean;
    
}


const ChatForm = ({
    isHidden,
    onSubmit,
    value,
    onChange,
    isFollowersOnly,
    isDelayed,
    isFollowing,
  
}:ChatFormProps) => {


  const [isDelayedBlock , setDelayedBlock] = useState(false)

 const isFollowersOnlyButNotFollowing = isFollowersOnly && !isFollowing

 const isDisabled = isHidden || isFollowersOnlyButNotFollowing || isDelayedBlock


 const handleSubmit = (e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    e.stopPropagation();

    if(!value || isDisabled) return;

    if(!isDelayedBlock || isDelayed){
        setDelayedBlock(true)
        setTimeout(() => {
            setDelayedBlock(false)
        }, 3000); // 10 seconds delay
        onSubmit()
    }else{
        onSubmit()
    }
 }
 if(isHidden){
    return null; // Don't render when hidden.
 }

  return (
    <form 
    onSubmit={handleSubmit}
    className="flex flex-col items-center gap-y-4 p-3"
    >
        <div className="w-full">
            <Input
            placeholder="Send a message..."
            value={value}
            onChange={()=>{}}
            disabled={isDisabled}
            className={cn("border-white/10",
                isFollowersOnly && "rounded-t-none border-t-0"
            )
            }
            />
        </div>
        <div className="ml-auto">
            <Button 
            variant={"primary"}
            size={"sm"}
            disabled={isDisabled}
            type="submit"
            >
                Chat
            </Button>
        </div>
    </form>
  );
};

export default ChatForm;