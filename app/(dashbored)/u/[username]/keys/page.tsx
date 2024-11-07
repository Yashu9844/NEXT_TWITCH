import { Button } from "@/components/ui/button";
import UrlComp from "./_components/UrlComp";
import { getSelf } from "@/lib/auth-service";
import { getUserStreamIdByuserId } from "@/lib/stream-service";

const Page = async () => {
 
    const self = await getSelf();
    const stream = await getUserStreamIdByuserId(self.id)
   if(!stream){
     return <p>You are not streaming yet. Please start streaming to generate a key.</p>;
   }

  return (
    <div className="p-6" >
      <div className="flex items-center justify-between mb-4">
        <p className="font-bold text-2xl" >Keys & URLs</p>
        <Button variant={"primary"} >Generate</Button>
      </div>
      <div className="space-y-4">
        <UrlComp value = {stream.serverUrl} />
      </div>

    </div>
  );
};

export default Page;