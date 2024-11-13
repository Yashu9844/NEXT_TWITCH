"use client";

import { useStartAudio, useTracks } from "@livekit/components-react";
import { Participant, Track } from "livekit-client";
import { useEffect, useRef, useState } from "react";
import FullScreenController from "./FullScreenController";
import VolumeController from "./VolumeController";

interface LiveVideoProps {
    participant: Participant;
}

const LiveVideo = ({ participant }: LiveVideoProps) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const wrapperref = useRef<HTMLDivElement>(null);

  const [isFullScreen , setIsFullScreen] = useState(false)
const [volume , setVolume] = useState(0)


const onVolumeChange = (value:number)=>{
  setVolume(+value);
  if(videoRef?.current){
    videoRef.current.muted = value===0
    videoRef.current.volume = +value*0.01;
  }
}

const toggleMuted = ()=>{
  const isMuted = volume === 0;

  setVolume(isMuted ? 50 : 0)

  if(videoRef?.current){
    videoRef.current.muted  = !isMuted
    videoRef.current.volume = isMuted ? 0.5 : 0 ;
  }
}

useEffect(()=>{
  onVolumeChange(0)
},[])



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
                 <VolumeController
                 onChange={onVolumeChange}
                 value={volume}
                 onToggle={toggleMuted}
                 />
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
