'use client';

import { useLottie } from 'lottie-react';
import animationData from '@/global/animations/loading.json';

const defaultAnimationOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

export interface LoadingContentProps {
  width?: number;
}

export function LoadingContent({ width = 450 }: LoadingContentProps) {
  const { View } = useLottie(defaultAnimationOptions, {
    width,
  });

  return <div className="w-full h-full flex items-center justify-center">{View}</div>;
}

export default LoadingContent;
