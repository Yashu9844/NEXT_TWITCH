import { Skeleton } from "@/components/ui/skeleton";
import { TogglePageSkeleton } from "./page";

const Loading = () => {
  return (
    <div className="p-6 space-y-4">
      <Skeleton className="w-[400px] h-20" />
      <div className="space-y-4">
      <TogglePageSkeleton/>
      <TogglePageSkeleton/>
      <TogglePageSkeleton/>
      </div>
    </div>
  );
};

export default Loading;