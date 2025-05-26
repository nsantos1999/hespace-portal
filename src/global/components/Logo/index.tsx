'use client';

import Image from 'next/image';

export function Logo() {
  return (
    <Image
      src="/images/navbar-logo.png"
      fill
      className="mr-3 h-6 sm:h-9 object-contain"
      alt="PDE Logo"
    />
  );
}
