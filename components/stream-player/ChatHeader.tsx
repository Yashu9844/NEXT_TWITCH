import { Skeleton } from "../ui/skeleton";
import ChatToggle from "./ChatToggle";

const ChatHeader = () => {
  return (
    <div className="p-3 border-b realtive">
  <div className="absolute  hidden lg:block  ">
  <ChatToggle/>
  </div>
      <div className="font-semibold text-primary text-center">
    Stream Chat
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