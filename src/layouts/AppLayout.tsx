import React from 'react';
import Footer from '@components/FooterLayout';
import Header from '@components/HeaderLayout';

interface IProps {
  children: React.ReactNode;
}

const AppLayout = ({ children }: IProps) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default AppLayout;
