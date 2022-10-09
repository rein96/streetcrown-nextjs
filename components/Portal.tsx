import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

const Portal = ({ children }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    return () => {
      setMounted(false);
    };
  }, []);

  if (!mounted) return null;

  // mounted = true
  return createPortal(children, document.querySelector('#snackbar-portal'));
};

export default Portal;
