
import { getRecommended } from "@/lib/recommend";
import Recommended, { ReccommendedSkeleton } from "./Recommended";
import Toggle, { ToggleSkeleton } from "./Toogle";
import Wrapper from "./Wrapper";

const SideBar =async () => {

const recommended = await getRecommended()

  return (
    <Wrapper>
      <Toggle/>
      <div className="space-y-4 pt-4 lg:pt-0">
        <Recommended data={recommended} />
      </div>
    </Wrapper>
  );
};

export default SideBar;       

export const SideBarSkeleteon = ()=>{
  return (
    <aside className="fixed left-0 flex flex-col w-[70px] lg:w-60 
    h-full bg-background border-r border-[#2D2E35] z-50
    
    " >
         <ToggleSkeleton/>
      <ReccommendedSkeleton/>

    </aside>
  )
}