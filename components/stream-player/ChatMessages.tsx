"use client"

import { stringToColor } from "@/lib/utils";
import {  ReceivedChatMessage } from "@livekit/components-react";
import {format} from 'date-fns'
import moment from "moment"
interface ChatMessagesProps{
    data:ReceivedChatMessage;
}


const ChatMessages = ({
    data,
 
}:ChatMessagesProps) => {
const color = stringToColor(data.from?.name || "" )


  return (
    <div className="flex gap-2 p-2 rounded-md hover:bg-white/5">
      <p>{moment(data.timestamp).format("HH:mm")}</p>
      <div className="flex flex-wrap items-baseline gap-1 grow">
        <p className="text-sm font-semibold whitespace-nowrap" >
 <span className="truncate" style={{color:color}} > {data.from?.name} </span> :

        </p>
        <p className="text-sm break-all">{data.message}</p>
      </div>
    </div>
  );
};

export default ChatMessages;