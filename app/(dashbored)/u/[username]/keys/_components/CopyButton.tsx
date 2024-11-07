"use client"

import { Button } from "@/components/ui/button";
import { CheckCheck, Copy } from "lucide-react";
import { useState } from "react";


interface CopyButtonProps{
    value: string | null;
}
const CopyButton = ({value}:CopyButtonProps) => {
  
    const [isCopied , setCopy ] = useState(false)

    const onCopy = () => {
        if (value !== null) {
            navigator.clipboard.writeText(value);
            setCopy(true);
            setTimeout(() => setCopy(false), 1000);
        }else{
            return ;
        }
    };
 

  return (
    <Button
    onClick={onCopy}
    disabled={!value || isCopied}
    variant = "ghost"
    size={"sm"}
   
    >
      {isCopied ? <CheckCheck  className="h-4 w-4" /> : <Copy className="h-4 w-4"/>}
    </Button>
  );
};

export default CopyButton;