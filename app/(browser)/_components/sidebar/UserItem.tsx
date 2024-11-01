"use client"

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useSideBar } from "@/store/use-sidebar";
import Link from "next/link";
import { usePathname } from "next/navigation";
import UserAvatar from "./UserAvatar";

interface UserItemProps{
    username:string;
    imageUrl:string;
    isLive:boolean;
}


const UserItem = ({username,isLive,imageUrl} : UserItemProps) => {

 const pathname = usePathname()
 const href = `/${username}`
const {collapsed} = useSideBar()
const isActive = pathname === href
  return (
    <Button
    asChild
    variant={"ghost"} className={cn("w-full h-12",
        collapsed ? "justify-center" : "justify-start",
        
    )} >
      <Link href={href}>
      <div className={cn("flex items-center w-full gap-x-4 ",
collapsed && "justify-center",
isActive && "bg-accent"

      )}>
        <UserAvatar username = {username} imageUrl={imageUrl} isLive={isLive} showBadge={false} />
        
        </div></Link>
    </Button>
  );
};

export default UserItem;