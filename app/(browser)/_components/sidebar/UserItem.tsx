"use client"

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useSideBar } from "@/store/use-sidebar";
import Link from "next/link";
import { usePathname } from "next/navigation";
import UserAvatar from "./UserAvatar";
import LiveBadge from "@/app/components/LiveBadge";
import { Skeleton } from "@/components/ui/skeleton";

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
        {!collapsed && (
          <p className="truncate" >{username}</p>
        )}
       {!collapsed && isLive && (
        <LiveBadge className="ml-auto" />
       )}

        </div></Link>
    </Button>
  );
};

export default UserItem;

export const UserItemSkeleton = ()=>{
  return (
    <li className="flex items-center gap-x-4 px-3 py-2">
      <Skeleton className="min-h-[32] min-w-[32px] rounded-full " />
      <div className="felx-1">
        <Skeleton  className="h-6" />
      </div>
    </li>
  )
}