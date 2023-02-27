import React from 'react';
import Footer from '../footer';
import Header from '../header';
import './style.scss';

interface LayoutProps {
  children: React.ReactElement;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="main">
      <Header />
      <div className="">
        <div className="">{children}</div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
