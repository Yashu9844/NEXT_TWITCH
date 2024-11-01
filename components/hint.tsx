import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
  } from "@/components/ui/tooltip"
  
interface HintProps{
    label:string;
    children: React.ReactNode;
    side?:"left" | "right" | "top" | "bottom";
    align?:"center" | "end" | "start"
    asChild?:boolean;
}


const Hint = ({

 label, children, side, align, asChild

} : HintProps) => {
  return (
    <TooltipProvider>
      <Tooltip delayDuration={0} >
        <TooltipTrigger asChild={asChild}>
          <span>{children}</span>
        </TooltipTrigger>
        <TooltipContent side={side} align={align} className="text-black bg-white" >
          <p className="font-semibold" >{label}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default Hint;