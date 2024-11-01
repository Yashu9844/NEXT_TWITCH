"use client"
import {useMediaQuery} from 'usehooks-ts'
import { cn } from "@/lib/utils";
import { useSideBar } from "@/store/use-sidebar";
import { useEffect } from 'react';

interface ContainerProps{
    children:React.ReactNode
}

const Container = ({children} : ContainerProps) => {
const {collapsed , onExpand , onCollapse} = useSideBar((state)=>state)
const matches = useMediaQuery("(max-width:1024px)")
useEffect(()=>{
    if(matches){
        onCollapse()
    }else{
        onExpand()
    }
},[matches,onCollapse,onExpand,onCollapse])


  return (
    <div className={cn("flex-1" , collapsed ? "ml-[70px] " : "ml-[70px] lg:ml-60")}>
      
      {children}
    </div>
  );
};

export default Container;