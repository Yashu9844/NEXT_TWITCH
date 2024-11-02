"use client"
import { cn } from "@/lib/utils";
import { useSideBar } from "@/store/use-sidebar";
import { useEffect, useState } from "react";
import { ToggleSkeleton } from "./Toogle";
import { ReccommendedSkeleton } from "./Recommended";
import { FollowingSkeleton } from "./Following";

const Wrapper = ({children} : {children:React.ReactNode}) => {

 const [isClient , setIsClient] = useState(false)


 const {collapsed} = useSideBar((state) => state)  

useEffect(()=>{setIsClient(true)},[])

if(!isClient) return (
  <aside className="fixed left-0 flex flex-col w-[70px]  lg:w-60 h-full bg-background border-r border-[#2D2E35] z-50"
   >
         <ToggleSkeleton/>
         <FollowingSkeleton/>
         <ReccommendedSkeleton/>
        </aside>
);

  return (
    <aside className={cn("fixed left-0 flex flex-col   w-60 h-full bg-background border-r border-[#2D2E35] z-50",
collapsed && "w-[70px]"

     )}>
      {children}
    </aside>
  );
};

export default Wrapper;