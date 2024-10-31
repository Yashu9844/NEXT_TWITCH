import React from 'react';
import NavBar from './_components/navbar/NavBar';
import SideBar from './_components/sidebar/SideBar';

interface BrowserLayoutProps {
  children: React.ReactNode; // Define the type of children
}

const BrowserLayout: React.FC<BrowserLayoutProps> = ({ children }) => {
  return (
    <>
       <NavBar/>
      <div className="flex h-full pt-20">
        <SideBar/>
      {children}
      </div>
    </>
  );
};

export default BrowserLayout;
