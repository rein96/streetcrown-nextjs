import React from 'react';
import Footer from './Footer';
import Header from './Header';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <div className='layout-container'>{children}</div>
      <Footer />

      {/* CSS */}
      <style jsx>{`
        .layout-container {
          min-height: calc(100vh - 342px);
        }
      `}</style>
    </>
  );
};

export default Layout;
