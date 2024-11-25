"use client"

import { ElementRef, useRef, useState, useTransition } from "react";
import { Button } from "../ui/button";
import { Dialog, DialogClose, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { updateStream } from "@/actions/stream-update";
import { toast } from "sonner";

interface InfoModalProps{
    intialName:string;
    intialThumbNail:string | null;
}


const InfoModal = ({
    intialName,
    intialThumbNail 
}:InfoModalProps) => {
  const  closeRef = useRef<ElementRef<"button">>(null)
    const [name,setName] = useState(intialName)
    const [isPending, startTransition] = useTransition()
  const onChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
    setName(e.target.value)
  }
  const  onSubmit = (e:React.FormEvent<HTMLFormElement>)=>{
  e.preventDefault();
  
  startTransition(()=>{
    updateStream({name:name})
    .then(()=>{
        toast.success("Stream successfully updated")
           closeRef?.current?.click() 
    }                 
)
    .catch(()=>toast.error("Failed to update stream"))
  })

  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
        variant={"link"}
        className="ml-auto"
        size="sm"
        
        >Edit</Button>
      </DialogTrigger>
    <DialogContent>
        <DialogHeader>
            <DialogHeader>
                Edit stream info
            </DialogHeader>
        </DialogHeader>
        <form action="space-y-14" onSubmit={onSubmit}>
        <div className="space-y-2">
            <Label>Name</Label>
            <Input
            placeholder="Stream name"
            value={name}
            onChange={onChange}
            disabled={isPending}
            />
        
        </div>
        <div className="flex justify-between mt-14">
                <DialogClose ref={closeRef} asChild>
                   <Button
                   variant={"ghost"}
                   size={"sm"}
                   >Cancel</Button>
                </DialogClose>
                <Button
                disabled={isPending}
                variant={"primary"}
                size={"sm"}
                type="submit"
                >Save</Button>
            </div>
    </form>
    </DialogContent>

    </Dialog>
  );
};

export default InfoModal;