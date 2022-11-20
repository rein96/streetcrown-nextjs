import { useFlags } from 'flagsmith/react';
import React from 'react';
import WhatsappButton from './components/WhatsappButton';
import Footer from './Footer';
import Header from './Header';

interface LayoutProps {
  children: React.ReactNode;
}

/** Reusable Layout component for pages */
const Layout: React.FC<LayoutProps> = ({ children }) => {
  const flags = useFlags(['floating_whatsapp_button'])

  const floatingWhatsappButtonEnabled = flags.floating_whatsapp_button.enabled

  return (
    <>
      <Header />
      <div className='layout-container'>{children}</div>
      <Footer />

      {
        floatingWhatsappButtonEnabled
        &&
        <WhatsappButton />
      }

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
