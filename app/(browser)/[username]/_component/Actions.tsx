"use client"
import { Button } from "@/components/ui/button";
import { getFollow } from "../actions/getFollow";
import { useTransition } from "react";
import { toast } from "sonner";
import { getUnFollow } from "../actions/getUnFollow";

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


  return (
    <Button onClick={onClick} variant={"primary"} disabled={  isPending} >
  {isFollowing ? "Unfollow" : "Follow"}
 
     </Button>
  );
};

export default Actions;