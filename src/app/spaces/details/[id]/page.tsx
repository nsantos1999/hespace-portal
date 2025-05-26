'use client';

import React from 'react';
import { SpaceDetailsComponent } from '@/modules/spaces/components/SpaceDetails';
import { DefaultLayout } from '@/global/layout/DefaultLayout';

export default function SpaceDetails({ params }: { params: { id: string } }) {
  console.log(params);

  return (
    <DefaultLayout>
      <div className="flex-1 container mx-auto p-8">
        <SpaceDetailsComponent id={Number(params.id)} />
      </div>
    </DefaultLayout>
  );
}
