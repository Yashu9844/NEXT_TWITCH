
import { getRecommended } from "@/lib/recommend";
import Recommended from "./Recommended";
import Toggle from "./Toogle";
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