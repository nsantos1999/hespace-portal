import React, { useRef, useState } from 'react';

import Link from 'next/link';

interface BackButtonProps {
  url: string;
}

export function BackButton({url}: BackButtonProps) {
  return (
    <div className="flex">
      <Link
        className="h-full w-auto text-center bg-[#407398] text-white font-bold py-2 px-4 rounded-lg hover:bg-[#2c5c7e] focus:outline-none"
        href={url}
      >
        Voltar
      </Link>
    </div>
    
  );
};