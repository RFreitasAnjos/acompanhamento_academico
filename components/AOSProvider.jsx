// components/AOSProvider.jsx or components/AOS.jsx
'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AOSProvider = ({ children }) => {
  const pathname = usePathname();

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      offset: 120,
      easing: 'ease-out-cubic',
    });
  }, []);

  useEffect(() => {
    AOS.refreshHard();
  }, [pathname]);

  return <>{children}</>;
};

export default AOSProvider;
