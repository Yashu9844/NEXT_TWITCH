"use client"
import { useUser } from "@clerk/nextjs";
import { Fullscreen, KeyRound, MessageSquare, Users } from "lucide-react";
import { usePathname } from "next/navigation";
import NavItem, { NavItemSkeleton } from "./NavItem";

const Navigation = () => {


    const pathname = usePathname()
    const {user} = useUser()

    const routes = [ 
        {
            label:"Stream",
            href:`/u/${user?.username}`,
            icon:Fullscreen
        },
        {
            label:"Keys",
            href:`/u/${user?.username}/keys`,
            icon:KeyRound
        },
        {
            label:"Chat",
            href:`/u/${user?.username}/chat`,
            icon:MessageSquare
        },
        {
            label:"Community",
            href:`/u/${user?.username}/community`,
            icon:Users
        },
    ]



 if(!user?.username){
    return (
        <ul className="space-y-2">
           {
            [...Array(4)].map((_,i)=>
            <NavItemSkeleton key={i} />)
           }
        </ul>
    )
 }


  return (



    <ul className="space-y-2 pt-4 px-2">
      {routes.map((route)=>(
        <NavItem
        label={route.label}
        href={route.href}
        icon={route.icon}
        key={route.href}
        isActive={pathname === route.href}
        
        />
      ))}
    </ul>
  );
};

export default Navigation;