import { Input } from "@/components/ui/input";
import CopyButton from "./CopyButton";

interface UrlCompProps{
    value: string | null
}


const UrlComp = ({value}:UrlCompProps) => {
  return (
    <div className="rounded-xl bg-muted p-6" >
      <div className="flex items-center gap-x-4">
        <p className="font-semibold shrink-0" >Stream key :</p>
        <div className="w-full spacec-y-4">
            <div className="w-full flex items-center gap-x-2">
                <Input
                 placeholder="Server URL"
                 value = {value || ""}
                 disabled
                />
                <CopyButton value={value} />
            </div>
        </div>
      </div>
    </div>
  );
};

export default UrlComp;