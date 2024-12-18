"use client"


import { Maximize, Minimize } from "lucide-react";
import Hint from "../hint";

interface FullScreenControllerProps{
    onToggle: () => void;
    isFullScreen: boolean;
}

const FullScreenController = ({
    onToggle,
    isFullScreen,
  }: FullScreenControllerProps) => {
    const  Icon = isFullScreen ? Minimize:Maximize
    const label = isFullScreen? "Exit Full Screen" : "Enter Full Screen";

  return (
    <div className="flex  items-center justify-center gap-4">
      <Hint label={label} >
        <button 
        onClick={onToggle}
        className="text-white p-1.5 hover:bg-white/10 rounded-lg">
            <Icon/>
        </button>
      </Hint>
    </div>
  );
};

export default FullScreenController;