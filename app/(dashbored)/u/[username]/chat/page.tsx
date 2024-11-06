import { getSelf } from "@/lib/auth-service";
import { getUserStreamIdByuserId } from "@/lib/stream-service";
import ToggleBut from "./_components/ToggleBut";
import { notFound } from "next/navigation";

const ChatPage = async () => {
 
    const self = await getSelf();
    const stream = await getUserStreamIdByuserId(self.id)
 if(!stream) return notFound();
  return (
    <div className="p-6">
      <div className="mb-4">
       <h1 className="text-2xl font-bold"  >Chat Setting</h1>
      </div>
      <div className="space-y-4">
        <ToggleBut
        feild="isChatEnabled"
        value={Boolean(stream?.isChatEnabled)}
        label="Enable Chat"
        />
        
        
      </div>
    </div>
  );
};

export default ChatPage;