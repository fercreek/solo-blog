import { useState, useEffect } from 'react';

export const useParallax = (factor = 0.3) => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const onScroll = () => setOffset(reduced ? 0 : window.scrollY * factor);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [factor]);

  return offset;
};
