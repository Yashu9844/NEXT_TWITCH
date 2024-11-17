import { ReceivedChatMessage } from "@livekit/components-react";
import ChatMessages from "./ChatMessages";

interface ChatListProps{
    messages:ReceivedChatMessage[]
    isHidden:boolean
}


const ChatList = ({
    messages,
    isHidden
  
}:ChatListProps) => {

 if(isHidden || messages.length ===0 || !messages){
    return(
        <div className="flex items-center justify-center flex-1">
            <p className="text-sm text-muted-foreground ">
{isHidden ? "Chat is Disabled": "Welcome to the chat!"}

            </p>
        </div>
    )
 }
 

  return (
    <div className="flex flex-1 flex-col-reverse overflow-y-auto p-3 h-full">
      {messages.map((message)=>(
        <ChatMessages
        key={message.timestamp}
        data={message}
        />
      ))}
    </div>
  );
};

export default ChatList;