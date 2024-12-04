import { SignedIn, SignedOut, RedirectToSignIn, UserButton } from "@clerk/nextjs";
import Results, { ResultsSkeleton } from "./_components/Result";
import { Suspense } from "react";

export default function Home() {
  return (
    <>
   
 
    <SignedIn>
    <div className="h-full p-8 max-w-screen-2xl mx-auto">
      <Suspense fallback={<ResultsSkeleton />}>
        <Results />
      </Suspense>
    </div>
      </SignedIn>
      {/* <SignedOut>
        <RedirectToSignIn />
      </SignedOut> */}
  
    </>
  );
}
