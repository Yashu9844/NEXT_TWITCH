import { Button } from "@/components/ui/button";
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