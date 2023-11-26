'use client';

import { useState, useEffect } from 'react';
import Aside from './aside';
import Menu from './menu';

export default function Navigation() {
  const [windowDimensions, setWindowDimensions] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : undefined,
    height: typeof window !== 'undefined' ? window.innerHeight : undefined,
  });

  useEffect(() => {
    function handleResize() {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  const isWideScreen = windowDimensions.width && windowDimensions.width > 768;

  return <>{isWideScreen ? <Aside /> : <Menu />}</>;
}
