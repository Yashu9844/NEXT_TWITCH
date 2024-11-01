import React, { Suspense } from 'react';
import NavBar from './_components/navbar/NavBar';
import SideBar, { SideBarSkeleteon } from './_components/sidebar/SideBar';
import Container from './_components/Container';

interface BrowserLayoutProps {
  children: React.ReactNode; // Define the type of children
}

const BrowserLayout: React.FC<BrowserLayoutProps> = ({ children }) => {
  return (
    <>
       <NavBar/>
      <div className="flex h-full pt-20">
      <Suspense fallback={<SideBarSkeleteon/>} >
      <SideBar/>
      </Suspense>
     <Container>
      {children}
     </Container>
      </div>
    </>
  );
};

export default BrowserLayout;
