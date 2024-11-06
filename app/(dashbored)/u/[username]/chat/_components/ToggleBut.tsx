"use client"

import { Switch } from "@/components/ui/switch";

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
  return (
    <div className="rounded-xl p-6 bg-muted" >
      <div className="flex items-center justify-between">
        <p  className="font-semibold shrink-0" >{label}</p>
        <div className="space-y-4">
            <Switch
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