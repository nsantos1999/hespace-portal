'use client';

import React from 'react';
import { SpaceFormComponent } from '@/modules/spaces/components/SpaceForm';
import { DefaultLayout } from '@/global/layout/DefaultLayout';

export default function SpaceEdit({ params }: { params: { id: string } }) {
  return (
    <DefaultLayout>
      <div className="flex-1 container mx-auto p-8">
        <SpaceFormComponent id={Number(params.id)} />
      </div>
    </DefaultLayout>
  );
}
