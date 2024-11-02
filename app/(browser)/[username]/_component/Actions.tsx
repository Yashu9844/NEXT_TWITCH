"use client"
import { Button } from "@/components/ui/button";
import { getFollow } from "../actions/getFollow";
import { useTransition } from "react";
import { toast } from "sonner";

interface ActionsProps{
    isFollowing: boolean;
    userId:string;
}


const Actions = ({isFollowing , userId}:ActionsProps) => {

const [isPending,startTransition] = useTransition()
 
const onClick = () => {
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

  return (
    <Button onClick={onClick} variant={"primary"} disabled={ isFollowing || isPending} >
      Follow
    </Button>
  );
};

export default Actions;