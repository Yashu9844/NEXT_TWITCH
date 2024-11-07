"use client"

import { Alert, AlertTitle ,AlertDescription} from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import {Dialog , DialogTrigger , DialogContent , DialogHeader , DialogClose, DialogTitle, DialogDescription} from "@/components/ui/dialog"
import { AlertTriangle } from "lucide-react";



const GenerateComponent = () => {
  return (
    <Dialog>
      <DialogTrigger>
        <Button  variant={"primary"} size="sm">Generate Connection</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
            <DialogTitle>Generate Connection</DialogTitle>
           
        </DialogHeader>
        <Alert>
            <AlertTriangle className="h-4 w-4" />
            <AlertTitle>!Warning</AlertTitle>
            <AlertDescription>
                This action will reset all active streams using current connection 
            </AlertDescription>
        </Alert>
        <div className="flex justify-between">
            <DialogClose>
                <Button variant={"ghost"} >Close</Button>
            </DialogClose>
            <Button variant={"primary"} >Generate</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default GenerateComponent;