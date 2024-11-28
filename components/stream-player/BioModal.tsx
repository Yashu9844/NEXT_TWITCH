"use client"

import { ElementRef, useRef, useState, useTransition } from "react";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import { Textarea } from "../ui/textarea";
import { DialogClose } from "@radix-ui/react-dialog";
import { updateUser } from "@/actions/user";
import { toast } from "sonner";

 
interface BioModalProps{
    intialValue:string | null;
}
const BioModal = ({
    intialValue
}:BioModalProps) => {

const [value ,setValue] = useState(intialValue || " ")

const [isPending,startTransition] = useTransition()

const handleSubmit = (e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault()

    startTransition(()=>{
        updateUser({bio:value})
        .then(()=>{
            toast.success("Bio successfully updated")
            closeRef.current?.click()  // Close the dialog when updated
        })
        .catch(()=>toast.error("Failed to update bio"))
    })
}
const closeRef = useRef<ElementRef<"button">>(null)

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={"link"} size={"sm"} className="ml-auto">Edit</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
            <DialogTitle>
                Edit the bio
            </DialogTitle>
            <form onSubmit={handleSubmit} className="space-y-4" >
                <Textarea
                 placeholder="Enter the bio of yours"
                value={value}
                onChange={(e)=>setValue(e.target.value)}
                disabled={isPending}
               
                />
                <div className="flex justify-between">
                    <DialogClose ref={closeRef} asChild>
                        <Button variant={"ghost"} type="button" size={"sm"}>Cancel</Button>
                    </DialogClose>
                    <Button type="submit" disabled={isPending} size={"sm"} variant={"primary"}>Save</Button>
                </div>
            </form>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default BioModal;