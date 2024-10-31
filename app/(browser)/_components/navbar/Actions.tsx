import { Button } from "@/components/ui/button";
import { SignInButton, UserButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import { Clapperboard } from "lucide-react";
import Link from "next/link";

const Actions = async () => {
  const user = await currentUser();

  return (
    <div className="flex items-center justify-end gap-x-5">
      {!user ? (
        <SignInButton>
          <Button size={"sm" } variant={"primary"} >Login</Button>
        </SignInButton>
      ) : (
        <>
        <div className="flex items-center gap-x-2">
          <Link
            href={`/u/${user.username}`}
            className="flex items-center gap-2 px-4 py-2 text-muted-foreground hover:text-primary rounded-md"
          >
            <Clapperboard className="h-5 w-5" />
            <span className="hidden lg:inline">Dashboard</span>
          </Link>
          <UserButton  afterSwitchSessionUrl="/"/>
        </div>
      
        </>
       

      )}

      
    </div>
  );
};

export default Actions;
