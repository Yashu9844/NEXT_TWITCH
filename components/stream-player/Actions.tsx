"use client"

import { useAuth } from "@clerk/nextjs";
import { Button } from "../ui/button";
import { Heart } from "lucide-react";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { getFollow } from "@/app/(browser)/[username]/actions/getFollow";
import { toast } from "sonner";
import { getUnFollow } from "@/app/(browser)/[username]/actions/getUnFollow";
import { Skeleton } from "../ui/skeleton";


interface ActionsProps{
    isFollowing : boolean,
    isHost : boolean,
    hostIdentity: string,
}


const Actions = ({
    isFollowing,
    isHost,
    hostIdentity,
  
}:ActionsProps) => {
      const router = useRouter()

    const {userId} = useAuth()
 
    const [isPending, startTransition] = useTransition()

 const handleFollow = ()=>{
    if(!userId){
        return router.push("/sign-in")
    }

    startTransition(()=>{
        getFollow(hostIdentity)
        .then((data)=>toast.success(`You are now following ${data.following.username}`))
        .catch(()=>toast.error("Failed to follow"))
    })
 }

 const handleUnFollow = ()=>{
    startTransition(()=>{
        getUnFollow(hostIdentity)
        .then((data)=>toast.success(`You are now unfollowed ${data.following.username}`))
        .catch(()=>toast.error("Failed to follow"))
    })
 }

 const toggleFollow = ()=>{
    if(!userId){
        return router.push("/sign-in")
    }

    if(isHost){
        return
    }

    if(isFollowing){
        handleUnFollow()
    }else{
        handleFollow()
    }
 }

  return (
    <Button
    disabled={isPending || isHost}
    size={"sm"}
    variant={"primary"}
    onClick={toggleFollow}
    className="w-full lg:w-auto"
    
    >
      
      <Heart className={cn("h-4 w-4 mr-2",
        isFollowing ? "fill-white" : "fill-none"
      )}/>
 
     {isFollowing ? "Unfollow" : "Follow"}
  
    </Button>
  );
};

export default Actions;
export const ActionsSkeleton = () => {
    return <Skeleton className="h-10 w-full lg:w-24" />;
  };