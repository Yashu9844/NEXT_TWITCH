import { useMemo } from "react";
import Hint from "../hint";
import { Info } from "lucide-react";

interface ChatInfoProps{
    isDelayed: boolean;
    isFollowersOnly: boolean;
}

const ChatInfo = ({
 isDelayed,
 isFollowersOnly,

}:ChatInfoProps) => {

 const hint = useMemo(()=>{

  if(isFollowersOnly && !isDelayed){
    return "Only followers can  chat"
  }
  if(isDelayed && !isFollowersOnly){
    return "Chat is delayed for 3 seconds"
  }
  if(isDelayed && isFollowersOnly){
    return "Chat is delayed for 3 seconds and only followers can chat"
  }
return ""
 },[isDelayed, isFollowersOnly])

if(!isDelayed && !isFollowersOnly){
    return null;
  
}
 const label = useMemo(()=>{

  if(isFollowersOnly && !isDelayed){
    return "Followers only"
  }
  if(isDelayed && !isFollowersOnly){
    return "Slow mode"
  }
  if(isDelayed && isFollowersOnly){
    return "Slow mode and only followers"
  }
return ""
 },[isDelayed, isFollowersOnly])


  




  return (
    <div className="border border-white/10 rounded-t-md flex items-center p-2 text-muted-foreground
    gap-x-2 w-full bg-white/5
    ">
      <Hint label={label} >
        <Info className="h-4 w-4" />
      </Hint>
      <p className="text-xs font-semibold" >{label}</p>
    </div>
  );
};

export default ChatInfo;