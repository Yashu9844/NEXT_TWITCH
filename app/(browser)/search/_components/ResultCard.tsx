import { Stream, User } from "@prisma/client";
import Link from "next/link";
import Thumbnail from "../../(Home)/_components/Thumbnail";

interface ResultCardProps{
    data : Stream & {user:User};

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
      </div>
    </Link>
  );
};

export default ResultCard;