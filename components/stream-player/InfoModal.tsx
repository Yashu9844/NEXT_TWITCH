"use client"

import { ElementRef, useRef, useState, useTransition } from "react";
import { Button } from "../ui/button";
import { Dialog, DialogClose, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { updateStream } from "@/actions/stream-update";
import { toast } from "sonner";
import { UploadDropzone } from "@/lib/uploadthing";
import { useRouter } from "next/navigation";
import Hint from "../hint";
import { Trash } from "lucide-react";
import Image from "next/image";

interface InfoModalProps{
    intialName:string;
    intialThumbNail:string | null;
}


const InfoModal = ({
    intialName,
    intialThumbNail 
}:InfoModalProps) => {
  const  closeRef = useRef<ElementRef<"button">>(null)

   const [thumbNail , setThumbnail] = useState(intialThumbNail)
    const [name,setName] = useState(intialName)
    const [isPending, startTransition] = useTransition()
   const router = useRouter()


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
  const onRemove = ()=>{
  
    startTransition(()=>{
      updateStream({thumbnailUrl:null})
      .then(()=>{
          toast.success("Stream thumbnail removed")
          setThumbnail("")
          closeRef?.current?.click()
      })
      .catch(()=>toast.error("Failed to remove thumbnail"))
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
        <div className="space-y-2 mt-6">
          <Label>Thumbnail</Label>
              {thumbNail ? (
  <div className="relative aspect-video rounded-xl overflow-hidden border border-white/10">
  <div className="absolute right-2 top-2 z-[10]">
    <Hint label="Remove thumbnail" side="left">
      <Button
        className="h-auto w-auto p-1.5"
        onClick={onRemove}
        disabled={isPending}
        type="button"
      >
        <Trash className="h-4 w-4" />
      </Button>
    </Hint>
  </div>
  <Image
    src={thumbNail}
    alt="Thumbnail"
    className="object-cover"
    layout="fill" // Makes the image fill its parent container
  />
</div>
              ):(
                          <div className="rounded-xl border outline-dashed outline-muted">
                          <UploadDropzone
                          endpoint={"thumbnailUploader"}
                          appearance={{
                            label:{
                              color:"#FFFFFF"
                            },
                            allowedContent:{
                              color:"#FFFFFF"
                            }
                          }}
                          
                          onClientUploadComplete={(res)=>{
                            setThumbnail(res?.[0]?.url)
                            router.refresh()
                            closeRef?.current?.click()
                          }}
                          
                          />
                        </div>
              )}
 
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