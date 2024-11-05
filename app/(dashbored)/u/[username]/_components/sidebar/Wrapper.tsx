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
    <aside className={cn(" h-full w-[70px] lg:w-60 bg-background border-r z-50 flex left-0  border-[#2D2E35]",
        collapsed && "w-[70px]"

    
    )} >
        
    <Toggle/>
    </aside>
  );
};

export default Wrapper;