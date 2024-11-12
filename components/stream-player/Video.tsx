"use client"

import { useConnectionState, useRemoteParticipant, useTracks } from "@livekit/components-react";
import { ConnectionState, Track } from "livekit-client";

interface VideoProps{
    hostName :string;
    hostIdentity :string;
}


const Video = ({hostName,hostIdentity}:VideoProps) => {
 
    const connectionState = useConnectionState();
    const Participant = useRemoteParticipant(hostIdentity);
    const tracks = useTracks([
        Track.Source.Camera,
        Track.Source.Microphone
    ]).filter((track)=>track.participant.identity === hostIdentity)
      let content;
 if(!Participant && connectionState === ConnectionState.Connected){
    content = <p>Host is offline</p>
 }else if(!Participant || tracks.length === 0){
    content = <p>Loading...</p>
 }else{
    content = <p>Live video</p>
 }

  return (
    <div className="border-b aspect-video group relative">
      {content}
    </div>
  );
};

export default Video;