import {  WifiOff } from "lucide-react";

interface OfflineProps{
    username:string
}

WifiOff
const OfflineVideo = ({username}:OfflineProps) => {
  return (
    <div className="h-full flex flex-col items-center justify-center space-y-4">
      
      <WifiOff className="h-10 w-10 text-muted-foreground" />
      <p className="text-muted-foreground">{username} is offline </p>
    </div>
  );
};

export default OfflineVideo;