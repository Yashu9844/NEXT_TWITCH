import { getSelfUser } from "@/lib/auth-service";
import { redirect } from "next/navigation";
import NavBar from "./_components/navbar/NavBar";
import SideBar from "./_components/sidebar/SideBar";

interface CreatorLayoutProps{
    children:React.ReactNode
    params:{username:string}
}


const CreatorLayout = async ({children , params}: CreatorLayoutProps ) => {
    const self = await getSelfUser(params.username)
if(!self){
    redirect("/")
}

  return (
   <>
   <NavBar/>
    <div className="pt-20 h-full flex">
      <SideBar/>
      {children}
    </div></>
  );
};

export default CreatorLayout;