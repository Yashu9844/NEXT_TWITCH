"use client"

import VErifiedCheckMark from "./VErifiedCheckMark";

interface AboutCardProps{
    hostIdentity: string;
    hostName: string;
    viewerIdentity:string;
    bio:string | null;
    followedByCount:number;
}


const AboutCard = ({
    hostIdentity,
    hostName,
    viewerIdentity,
    bio,
    followedByCount,
 
}:AboutCardProps) => {

  const hostAsviwer = `host-${hostIdentity}`
  const isHost = viewerIdentity === hostAsviwer
const followedBylabel = followedByCount === 1 ? 'follower' : 'followers'
  return (
    <div className="px-4">
      <div className="group bg-background p-6 lg:p-8 rounded-xl flex flex-col gap-y-3">
        <div className="flex items-center justify-between">
            <div className="text-xl lg:text-2xl font-semibold flex items-center gap-x-2">
                About {hostName}
                <VErifiedCheckMark/>
            </div>
            {
                isHost && (
                    <div className="cursor-pointer hover:underline">
                    <p className="text-sm font-bold text-muted-foreground" >Edit</p>
                </div>
                )
            }
        </div>
        <div className="text-sm text-muted-foreground">
            <span className="text-primary font-semibold">{followedByCount}</span> {followedBylabel}
        </div>
        <div className="">
           <p className="text-sm"> {bio || "This user keeps an air of mystery about"}</p>
        </div>
      </div>
    </div>
  );
};

export default AboutCard;