"use client"
import { Button } from "@/components/ui/button";
import { getFollow } from "../actions/getFollow";
import { useTransition } from "react";
import { toast } from "sonner";
import { getUnFollow } from "../actions/getUnFollow";
import { onBlock, onUnBlock } from "@/actions/block";

interface ActionsProps{
    isFollowing: boolean;
    userId:string;
}


const Actions = ({isFollowing , userId}:ActionsProps) => {

const [isPending,startTransition] = useTransition()
 
const handleFollow = () => {
  startTransition(() => {
    getFollow(userId)
      .then((data) => {
        toast.success(`you are following ${data?.following?.username}`);
      })
      .catch(() => {
      
        toast.error("Failed to follow"); // Display toast for failure
      });
  });
};
const handleUnFollow = () => {
  startTransition(() => {
    getUnFollow(userId)
      .then((data) => {
        toast.success(`you Unfollowed ${data?.following?.username}`);
      })
      .catch(() => {
      
        toast.error("Failed to unfollow"); // Display toast for failure
      });
  });
};

const onClick = ()=>{
  if(isFollowing){
    handleUnFollow()
  }else{
    handleFollow()
  }
}

const handleBlock = ()=>{
  startTransition(()=>{
    onBlock(userId).then((data)=>{
      toast.success(`You blocked ${data?.blocked?.username}`);
    }).catch((error)=>{
      toast.error("Failed to block"); // Display toast for failure
    })
  })
}
const handleunblock = ()=>{
  startTransition(()=>{
    onUnBlock(userId).then((data)=>{
     toast.success(`you unBlocked ${data.blocked.username}`)
    }).catch((error)=>{
      toast.error("Failed to unblock"); // Display toast for failure
    })
  })
}

  return (
   <>
    <Button onClick={onClick} variant={"primary"} disabled={  isPending} >
  {isFollowing ? "Unfollow" : "Follow"}
 
     </Button>
     
     <div className="flex flex-col w-[120px] gap-5">
     <Button onClick={handleBlock} disabled={isPending} >Block</Button>
     <Button onClick={handleunblock} disabled={isPending} >unBlock</Button>
     </div>
     </>
  );
};

export default Actions;