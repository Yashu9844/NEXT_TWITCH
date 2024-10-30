import { SignedIn, SignedOut, RedirectToSignIn, UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <>
   
    <div className="flex flex-col gap-y-4">
    <SignedIn>
        <div>Welcome to the protected homepage!</div>
        <UserButton  afterSwitchSessionUrl="/"/>
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </div>
    </>
  );
}
