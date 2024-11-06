"use client"

import { updateStream } from "@/actions/stream-update";
import { Switch } from "@/components/ui/switch";
import { useTransition } from "react";
import { toast } from "sonner";

type FieldType = "isChatEnabled" | "isChatDelayed" | "isChatFollowersOnly"


interface ToggleProps{
    label:string;
    feild:FieldType;
    value:boolean;

}


const ToggleBut = ({
    label,
    value = false,
    feild 
} : ToggleProps) => {
    const [isPending , startTransition] = useTransition()
const onChange = ()=>{
     startTransition(()=>{
        updateStream({[feild]:!value})
        .then(()=>toast.success("Successfully Chat Updated"))
        .catch(()=>toast.error("Failed to Update Chat"))
     })
    try {
        
    } catch (error) {
        
    }
}
  return (
    <div className="rounded-xl p-6 bg-muted" >
      <div className="flex items-center justify-between">
        <p  className="font-semibold shrink-0" >{label}</p>
        <div className="space-y-4">
            <Switch
            disabled={isPending}
            onCheckedChange={onChange}
            checked={value}
            >
                {value ? "On" : "Off"}
            </Switch>
        </div>
        
      </div>
    </div>
  );
};

export default ToggleBut;