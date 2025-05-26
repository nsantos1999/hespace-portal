'use client';

import { Logo } from '@/global/components/Logo';
import dynamic from 'next/dynamic';

const LoadingContent = dynamic(() => import('./components/LoadingContent'), {
  ssr: false,
});

export function LoadingScreen() {
  return (
    <section className="w-screen h-screen flex items-center justify-center relative">
      <LoadingContent />
      <div className="absolute">
        <div className="w-40 h-40 z-50">
          <Logo />
        </div>
      </div>
    </section>
  );
}
