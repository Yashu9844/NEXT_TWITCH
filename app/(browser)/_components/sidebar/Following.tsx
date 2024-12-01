"use client"

import { useSideBar } from "@/store/use-sidebar";
import { Follow, Stream, User } from "@prisma/client";
import UserItem, { UserItemSkeleton } from "./UserItem";


interface FollowProps{
    data:(Follow & {following:User &{
      stream:Stream | null
    }} )[];

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
      <ul className="space-y-4 px-4">
      {data.map((item )=>(
        <UserItem
        key={item.following.id}
        username={item.following.username}
        isLive={Boolean(item.following.stream?.isLive)}
        imageUrl={item.following.imageUrl}
        
        />
      ))}
      </ul>
    </div>
  );
};

export default Following;

export const FollowingSkeleton = ()=>{
    return(
        <ul className="px-2 pt-2 lg:pt-0">
       { [...Array(3)].map((_,i)=>(
        <UserItemSkeleton key={i} />
       ))}
        
        </ul>
    )
}