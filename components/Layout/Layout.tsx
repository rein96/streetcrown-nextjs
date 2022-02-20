import React, { useCallback, useEffect, useState } from 'react';
import Footer from './Footer';
import Header from './Header';

interface LayoutProps {
  children: React.ReactNode;
}

/** Reusable Layout component for pages */
const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [y, setY] = useState(0);

  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('up');

  const handleNavigation = useCallback(
    (e) => {
      if (y > window.scrollY) {
        // Scrolling up
        setScrollDirection('up');
      } else if (y < window.scrollY) {
        // Scrolling down
        setScrollDirection('down');
      }
      setY(window.scrollY);
    },
    [y]
  );

  useEffect(() => {
    window.addEventListener('scroll', handleNavigation);
    return () => {
      window.removeEventListener('scroll', handleNavigation);
    };
  }, [handleNavigation]);

  return (
    <>
      <Header scrollDirection={scrollDirection} />
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
