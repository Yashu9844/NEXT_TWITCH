import { cva , type VariantProps } from "class-variance-authority";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { cn } from "@/lib/utils";
import LiveBadge from "@/app/components/LiveBadge";
import { Skeleton } from "@/components/ui/skeleton";


const avatarsize = cva("", {
    variants:{
        size:{
            default:"h-8 w-8",
            lg:"h-14 w-14",
            xl:"h-20 w-20",
        }
    },
    defaultVariants:{
        size:"default"
    }
})

interface UserAvatarProps extends VariantProps<typeof avatarsize>{
    username:string;
    imageUrl:string;
    isLive?:boolean;
    showBadge?:boolean;

}

const UserAvatar = ({username , imageUrl , isLive,showBadge , size} : UserAvatarProps) => {
  
  const showbadge = isLive && showBadge
   
    return (
    <div className="relative">
      <Avatar className={cn(
        isLive && "ring-2 ring-rose-500 border border-background",
        avatarsize({size})
      )} >
        <AvatarImage src={imageUrl} className="object-cover" />
        <AvatarFallback>{username[0]} {username[username.length -1]}</AvatarFallback>
      </Avatar>
      {showBadge && (
        <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2">
            <LiveBadge/>
        </div>
      )}
    </div>
  );
};




export default UserAvatar;


interface UserAvatarSkeletonProps extends VariantProps<typeof avatarsize>{};


export const USerAvatarSkeleton = ({size}:UserAvatarSkeletonProps)=>{
  
 return (
   <Skeleton className={cn("rounded-full" , avatarsize({size}))}   />
 )

}
