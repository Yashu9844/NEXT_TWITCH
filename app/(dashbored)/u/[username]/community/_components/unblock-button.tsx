"use client"

import { onUnBlock } from "@/actions/block";
import { Button } from "@/components/ui/button";
import { useTransition } from "react";
import { toast } from "sonner";


interface UnblockButtonProps{
    userId:string;
}

const UnblockButton = ({userId} : UnblockButtonProps) => {

const [isPending , startTransition] = useTransition();

const handleBlock = ()=>{
    startTransition(()=>{
        onUnBlock(userId)
        .then((result)=>toast.success(`User ${result.blocked.username} unblocked`))
        .catch(()=>toast.error("Failed to unblock"))
    })
}

  return (
    <Button
    disabled={isPending}
    onClick={handleBlock}
    variant={"link"}
    size={"sm"}
    className="text-blue-500 w-full"
    
    >
      UnBlock
    </Button>
  );
};

export default UnblockButton;