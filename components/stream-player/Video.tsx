"use client"

import { useConnectionState, useRemoteParticipant, useTracks } from "@livekit/components-react";
import { ConnectionState, Track } from "livekit-client";
import OfflineVideo from "./OfflineVideo";
import LoadingVideo from "./LoadingVideo";
import LiveVideo from "./LiveVideo";

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
    content = <OfflineVideo username={hostName} />
 }else if(!Participant || tracks.length === 0){
    content =<LoadingVideo label={connectionState} />
 }else{
    content = <LiveVideo participant={Participant} />
 }

  return (
    <div className="border-b aspect-video group relative">
      {content}
    </div>
  );
};

export default Video;