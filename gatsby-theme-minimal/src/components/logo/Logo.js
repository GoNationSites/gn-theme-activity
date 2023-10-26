import React, { useEffect, useState, useRef } from 'react';
import { Image } from 'theme-ui';

export default function Logo({ logoImageId }) {
  const [scrolled, SetScrolled] = useState(false);

  const scrollRef = useRef();
  scrollRef.current = scrolled;

  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 70;
      if (scrollRef.current !== show) {
        SetScrolled(show);
      }
    };

    document.addEventListener('scroll', handleScroll);
  }, []);

  return (
    <Image
      src={`https://res.cloudinary.com/gonation/${logoImageId}`}
      variant={`logo.${!scrolled ? 'logo' : 'logoScrolled'}`}
      className={`${!scrolled ? 'logo' : 'logoScrolled'}`}
      alt='brand'
    />
  );
}
