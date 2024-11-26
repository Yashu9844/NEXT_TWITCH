import { Skeleton } from "../ui/skeleton";
import ChatToggle from "./ChatToggle";
import VarientToggle from "./VarientToggle";

const ChatHeader = () => {
  return (
<div className="p-3 border-b relative">
    {/* ChatToggle */}
    <div className="absolute hidden lg:block bottom-[13%] left-3">
      <ChatToggle />
    </div>

    {/* Stream Chat Title */}
    <div className="font-semibold text-primary text-center mt-1">
      Stream's Chat
    </div>

    {/* VarientToggle */}
    <div className="absolute right-3 top-[2.5vw] lg:top-[1vw]">
      <VarientToggle />
    </div>
  </div>
  );
};

export default ChatHeader;

export const ChatHeaderSkeleton = ()=>{
    return (
        <div className="relative p-3 border-b hidden md:block">
            <Skeleton className="absolute h-6 w-6 left-3 top-3" />
            <Skeleton className="w-28 h-6 mx-auto" />
        </div>
    )
}