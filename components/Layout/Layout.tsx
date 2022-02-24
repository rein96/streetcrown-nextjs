import React, { useCallback, useEffect, useState } from 'react';
import Footer from './Footer';
import Header from './Header';

interface LayoutProps {
  children: React.ReactNode;
}

function debounce(func: Function, wait: number, immediate?: boolean) {
  let timeout;
  return function () {
    // const context = this;
    const context = window;
    // const args = arguments;
    const later = function () {
      timeout = null;
      // if (!immediate) func.apply(context, args);
      if (!immediate) func.apply(context);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    // if (callNow) func.apply(context, args);
    if (callNow) func.apply(context);
  };
}

/** Reusable Layout component for pages */
const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [y, setY] = useState(0);

  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('up');

  const handleNavigation = debounce(() => {
    if (y > window.scrollY) {
      // Scrolling up
      setScrollDirection('up');
    } else if (y < window.scrollY) {
      // Scrolling down
      setScrollDirection('down');
    }
    setY(window.scrollY);
  }, 100);

  useEffect(() => {
    window.addEventListener('scroll', handleNavigation);
    return () => {
      window.removeEventListener('scroll', handleNavigation);
    };
  }, [handleNavigation, y, scrollDirection]);

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
