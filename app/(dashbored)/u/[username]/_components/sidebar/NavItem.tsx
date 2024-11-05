import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import { useCreatorSideBar } from "@/store/use-creator-sidebar";
import { LucideIcon } from "lucide-react";
import Link from "next/link";

interface NavItemProps{
    icon:LucideIcon;
    label: string;
    href: string;
    isActive: boolean;
}




const NavItem = ({
    icon : Icons,
    label,
    href,
    isActive,
 
} :NavItemProps) => {


 const {collapsed} = useCreatorSideBar((state)=>state)

  return (
    <Button 
    variant={"ghost"}
    className={cn("w-full h-12 ", collapsed ? "justify-center" : 'justify-start', isActive && "bg-accent")}
    asChild
    >
      
       <Link href={href} >

      <div className="flex gap-x-4 items-center">
      <Icons  className={cn("h-4 w-4 " , collapsed ? "mr-0" : "mr-2")} />
        {!collapsed && (
             <span>{label}</span>   
        )}      
      </div>
        </Link>

      

    </Button>
  );
};

export default NavItem;


export const NavItemSkeleton  = ()=>{
    return(
        <li className="flex items-center gap-x-4 p-3">
            <Skeleton className="min-h-[48px] min-w-[48px] rounded-md" />
        <div className=" flex-1 hidden lg:block">
            <Skeleton className="h-6" />
        </div>
        
        </li>
    )
}