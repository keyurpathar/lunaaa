import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useLenis } from 'lenis/react';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  const lenis = useLenis();

  useEffect(() => {
    if (lenis) {
      // Use Lenis's smooth scrollTo
      lenis.scrollTo(0);
    } else {
      // Fallback
      window.scrollTo({ top: 0 });
    }
  }, [pathname, lenis]);

  return null;
};

export default ScrollToTop;