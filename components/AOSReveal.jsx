'use client';

import { useEffect, useState } from 'react';
import AOS from 'aos';

export default function AOSReveal({
  children,
  animation = 'fade-up',
  delay = 0,
  className = '',
  as: Tag = 'div',
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      setMounted(true);
    });

    return () => window.cancelAnimationFrame(frameId);
  }, []);

  useEffect(() => {
    if (mounted) {
      AOS.refreshHard();
    }
  }, [mounted]);

  const aosProps = mounted
    ? { 'data-aos': animation, 'data-aos-delay': delay }
    : {};

  return (
    <Tag className={className} {...aosProps}>
      {children}
    </Tag>
  );
}
