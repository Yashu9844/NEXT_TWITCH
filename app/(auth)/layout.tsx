import { SignIn } from "@clerk/nextjs";
import { Logoo } from "./_component/Logo";


const AuthLayout = ({children} : {children : React.ReactNode}) => {
  return (
    <div className="h-full flex justify-center items-center">
     <Logoo/>
    
      {children}
    </div>
  );
};

export default AuthLayout;