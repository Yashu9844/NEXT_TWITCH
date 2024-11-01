"use client"
import Hint from "@/components/hint";
import { Button } from "@/components/ui/button";
import { useSideBar } from "@/store/use-sidebar";
import { ArrowLeftFromLine, ArrowLeftToLine, ArrowRightFromLine } from "lucide-react";

const Toggle = () => {
  
const {collapsed , onCollapse,onExpand } = useSideBar((state)=>state) 
const label = collapsed ? "Expand" : "Collapse";

return (
    <>
         {collapsed && (
            <div className="hidden lg:flex w-full items-center justify-center pt-4 mb-4">
              <Hint label={label} side="right" asChild >
              <Button className="p-2 h-auto" variant={"ghost"} onClick={onExpand} >
                    <ArrowRightFromLine className="h-5 w-5"/>
                </Button>
              </Hint>
            </div>
         )}
          


      {!collapsed && (
        <div className="flex p-3 pl-6 mb-2 items-center w-full justify-between">
            <p className="font-semibold text-primary" >For You</p>
           <Hint  label={label} side="right" asChild >
           <Button
            className="h-auto ml-auto p-2"
            variant={"ghost"}
            onClick={onCollapse}
            >
                  <ArrowLeftFromLine className="h-5 w-5"/>
            </Button>
           </Hint>
        </div>
      )}
    </>
  );
};

export default Toggle;