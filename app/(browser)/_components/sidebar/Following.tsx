"use client"

import { useSideBar } from "@/store/use-sidebar";
import { Follow, User } from "@prisma/client";
import UserItem from "./UserItem";


interface FollowProps{
    data:(Follow & {following:User})[];

}
const Following = ({data}:FollowProps) => {

    const {collapsed} = useSideBar((state)=>state)

 if(data.length ===0){
    return null;
 }

  return (
    <div>
      {!collapsed && (
        <div className="pl-6 mb-4">
            <p className="text-sm text-muted-foreground" >Following</p>
        </div>
      )}
      {data.map((item )=>(
        <UserItem
        key={item.following.id}
        username={item.following.username}
        isLive={false}
        imageUrl={item.following.imageUrl}
        
        />
      ))}
    </div>
  );
};

export default Following;