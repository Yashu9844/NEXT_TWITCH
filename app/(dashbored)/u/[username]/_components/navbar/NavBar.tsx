import { Logoo } from "@/app/(auth)/_component/Logo";

import Actions from "./Actions";

const NavBar = () => {
  return (
    <div className="h-20 fixed top-0 w-full z-[49] bg-[#252731] px-2 lg:px-4 flex justify-between items-center" >
     
      <Logoo/>
      
      <Actions/>
    </div>
  );
};

export default NavBar;