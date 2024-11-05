"use client"

import { cn } from "@/lib/utils";
import { useCreatorSideBar } from "@/store/use-creator-sidebar";
import Toggle from "./Toggle";

interface WrapperPropsCreator{
    children:React.ReactNode;
}


const Wrapper = ({children}:WrapperPropsCreator) => {

 const {collapsed} = useCreatorSideBar((state)=>state)

  return (
    <aside className={cn("fixed left-0 flex flex-col w-[70px]  lg:w-60 h-full bg-background border-r border-[#2D2E35] z-50",
        collapsed && "lg:w-[70px]"
        
             )}>
        
    <Toggle/>
    </aside>
  );
};

export default Wrapper;