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
            <div className="w-full hidden  lg:flex items-center  justify-center pt-4 mb-4">
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
            <div className="w-full hidden lg:flex items-center pl-6 p-3 mb-4">
                <p className="font-semibold text-primary">
                    Dashboard
                </p>
                <Hint side="right" label={label} asChild >
                    <Button
                    variant={"ghost"}
                    onClick={onCollapse}
                    className="h-auto p-2 ml-[4.5vw]"
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