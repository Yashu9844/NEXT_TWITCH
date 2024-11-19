import { Check } from "lucide-react";

const VErifiedCheckMark = () => {
  return (
    <div className="p-0.5 flex items-center justify-center h-4 w-4 bg-blue-600 rounded-full">
      <Check className="h-[10px] w-[10px] stroke-[4px] text-primary "/>
    </div>
  );
};

export default VErifiedCheckMark;