import React from 'react';
import NavigationBar from '../components/NavigationBar';

interface props {
  children?: React.ReactNode;
}

const MainLayout: React.FC<props> = ({ children }): JSX.Element => {
  return (
    <>
      <NavigationBar />
      {children}
    </>
  );
};

export default MainLayout;
