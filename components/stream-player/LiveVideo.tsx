"use client";

import { useStartAudio, useTracks } from "@livekit/components-react";
import { Participant, Track } from "livekit-client";
import { useRef, useState } from "react";
import FullScreenController from "./FullScreenController";

interface LiveVideoProps {
    participant: Participant;
}

const LiveVideo = ({ participant }: LiveVideoProps) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const wrapperref = useRef<HTMLDivElement>(null);

  const [isFullScreen , setIsFullScreen] = useState(false)

  const onToggleFullScreen = ()=>{
    if(isFullScreen){
      document.exitFullscreen();
      setIsFullScreen(false)
      console.log("now not in full screen mode")
    }else if(wrapperref?.current){
      wrapperref.current.requestFullscreen();
      setIsFullScreen(true);
      console.log("now  in full screen mode")
    }
  }



    useTracks([Track.Source.Camera, Track.Source.Microphone])
        .filter((tracks) => tracks.participant.identity === participant.identity)
        .forEach((track) => {
            if (videoRef.current) {
                track.publication.track?.attach(videoRef.current);
            }
        });

        return (
            <div ref={wrapperref} className="relative h-full flex">
              <video ref={videoRef} width="100%" />
              <div className="absolute top-0 h-full w-full opacity-0 hover:opacity-100 hover:transition-all">
                <div className="absolute bottom-0 flex h-14 w-full items-center justify-between bg-gradient-to-r from-neutral-900 px-4">
                
                  <FullScreenController
                    isFullScreen={isFullScreen}
                    onToggle={onToggleFullScreen}
                  />
                </div>
              </div>
            </div>
          );
};

export default LiveVideo;
