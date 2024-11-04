import { Button } from "@/components/ui/button";
import { SignInButton, UserButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import { Clapperboard, LogOutIcon } from "lucide-react";
import Link from "next/link";

const Actions =  () => {
  

  return (
   <div className="flex items-center justify-end gap-x-5">
      <Button className="text-muted-foreground hover:primary" size={"sm"} variant={"ghost"} asChild >
        <Link href={"/"} className="h-5 w-5 mr-3">
         <LogOutIcon/>
         Exit
        </Link>
      </Button>
      <UserButton afterSwitchSessionUrl="/" />
   </div>
  );
};

export default Actions;
