'use client';

import animationData from '@/global/animations/404.json';
import { DefaultLayout } from '@/global/layout/DefaultLayout';
import { useLottie } from 'lottie-react';

const defaultAnimationOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

export function Page404Component() {
  const { View } = useLottie(defaultAnimationOptions, {
    width: 450,
  });

  return (
    <DefaultLayout>
      <section className="w-full h-full relative flex justify-center items-center flex-col">
        {View} <p className="text-xl font-bold">Página não encontrada</p>
      </section>
    </DefaultLayout>
  );
}
