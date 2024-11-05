"use client"

import Hint from "@/components/hint";
import { Button } from "@/components/ui/button";
import { useCreatorSideBar } from "@/store/use-creator-sidebar";
import { ArrowLeftFromLine, ArrowRightFromLine } from "lucide-react";

const Toggle = () => {
    const {collapsed,onCollapse,onExpand} = useCreatorSideBar((state)=> state)
    let label = collapsed ? "Exapand" : "Collapsed";
  return (
    <div>
    {collapsed && (
        <div className="hidden lg:flex w-full items-center justify-center pt-4 mb-4">
                <Hint side="right" label={label} asChild >
                    <Button
                    variant={"ghost"}
                    onClick={onExpand}
                    className="h-auto p-2"
                    >
                        <ArrowRightFromLine className="h-5 w-5" />
                    </Button>
                </Hint>
            </div>
        )}
        {!collapsed && (
             <div className=" hidden lg:flex p-3 pl-6 mb-2 items-center w-full justify-between">
                <p className="font-semibold text-primary">
                    Dashboard
                </p>
                <Hint side="right" label={label} asChild >
                    <Button
                    variant={"ghost"}
                    onClick={onCollapse}
                    className="h-auto ml-auto p-2"
                    >
                        <ArrowLeftFromLine className="h-5 w-5" />
                    </Button>
                </Hint>
            </div>
        )}
    </div>
  );
};

export default Toggle;