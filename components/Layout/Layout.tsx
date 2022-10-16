import React from 'react';
import WhatsappButton from './components/WhatsappButton';
import Footer from './Footer';
import Header from './Header';

interface LayoutProps {
  children: React.ReactNode;
}

/** Reusable Layout component for pages */
const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <div className='layout-container'>{children}</div>
      <Footer />

      <WhatsappButton />

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
