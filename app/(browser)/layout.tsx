import React from 'react';
import NavBar from './_components/navbar/NavBar';

interface BrowserLayoutProps {
  children: React.ReactNode; // Define the type of children
}

const BrowserLayout: React.FC<BrowserLayoutProps> = ({ children }) => {
  return (
    <>
       <NavBar/>
      <div className="flex h-full pt-20">
      {children}
      </div>
    </>
  );
};

export default BrowserLayout;
