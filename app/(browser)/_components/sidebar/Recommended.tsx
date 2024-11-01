"use client"
import { useSideBar } from "@/store/use-sidebar";
import { User } from "@prisma/client";
import UserItem, { UserItemSkeleton } from "./UserItem";

interface RecommendedProps{
    data:User[];
}



const Recommended = ({data}:RecommendedProps) => {
  
  const {collapsed} = useSideBar((state)=>state)

const showLabel = !collapsed && data.length > 0 



  
    return (
    <div>
       {
        showLabel && (
          <div className="pl-6 mb-4">
            <p className="text-sm text-muted-foreground">Recommended</p>
           

          </div>
        )
       }
     <ul className="space-y-4 pl-6" >
        {!collapsed && data.map((item)=>{
            return (
               <UserItem key={item.id} username = {item.username} isLive={false} imageUrl = {item.imageUrl}  />
            )
        })}
     </ul>

    </div>
  );
};

export default Recommended;

export const ReccommendedSkeleton = ()=>{
  return (
    <ul className="px-2" >
      {[...Array(3)].map((_,i)=>{
        return (
          <UserItemSkeleton key={i} />
        )
      })}
    </ul>
  )
}