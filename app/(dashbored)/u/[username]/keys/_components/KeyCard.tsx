"use client"

import { Input } from "@/components/ui/input";
import CopyButton from "./CopyButton";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface keyCardProps{
    value: string | null;
}


const KeyCard = ({value} : keyCardProps) => {
    const [show , setShow] = useState(false)
  return (
    <div className="rounded-xl p-6 bg-muted">
      <div className="flex items-start gap-x-4">
        <p className="font-semibold shrink-0 mt-2">Stream Key:</p>
        <div className="w-full space-y-2">
            <div className="w-full flex items-center gap-x-2">
                <Input
                value={value || ""}
                disabled
                placeholder="Stream Key"
                type={show ? "text" : "password"}
                />
                <CopyButton value={value || " "} />
            </div>
            <Button variant={"link"} size={"sm"} onClick={()=>setShow(!show)} >{show ? "Hide" : "Show "}</Button>
        </div>
      </div>
    </div>
  );
};

export default KeyCard;