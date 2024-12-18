import { Stream, User } from "@prisma/client";
import Link from "next/link";
import Thumbnail, { ThumbnailSkeleton } from "../../(Home)/_components/Thumbnail";
import VErifiedCheckMark from "@/components/stream-player/VErifiedCheckMark";
import { formatDistanceToNow } from "date-fns";
import { Skeleton } from "@/components/ui/skeleton";

interface ResultCardProps{
  data: {
    id: string;
    name: string;
    thumbnailUrl: string | null;
    isLive: boolean;
    updatedAt: Date;
    user: User;
  };

}

const ResultCard = ({data} : ResultCardProps) => {
  return (
    <Link href={`/${data.user.username}`}>
      <div className="w-full flex gap-x-4">
        <div className="relative h-[9rem] w-[16rem] ">
            <Thumbnail
             src={data.thumbnailUrl}
             fallback={data.user.imageUrl}
             isLive={data.isLive}
             username={data.user.username}
            
            />
        </div>
        <div className="space-y-1">
            <div className="flex items-center gap-x-2">
                <p className="font-bold text-lg cursor-pointer hover:text-blue-500 ">
                    {data.user.username}
                </p>
                <VErifiedCheckMark/>
            </div>
            <p className="text-sm text-muted-foreground ">{data.name}</p>
            <p className="text-sm text-muted-foreground ">{formatDistanceToNow(new Date(data.updatedAt),{
                addSuffix:true
            })}</p>
        </div>
      </div>
    </Link>
  );
};

export default ResultCard;


export const ResultCardSkeleton = () => {
    return (
      <div className="w-full flex gap-x-4">
        <div className="relative h-[9rem] w-[16rem]">
          <ThumbnailSkeleton />
        </div>
        <div className="space-y-2">
          <Skeleton className="h-4 w-32" />
          <Skeleton className="h-3 w-24" />
          <Skeleton className="h-3 w-12" />
        </div>
      </div>
    );
  };