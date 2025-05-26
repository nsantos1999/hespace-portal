'use client';

import React from 'react';
import { UserConfidenceComponent } from '@/modules/user/components/UserConfidence';
import { DefaultLayout } from '@/global/layout/DefaultLayout';

export default function UserConfidence() {

  return (
    <DefaultLayout>
      <div className="flex-1 container mx-auto p-8">
        <UserConfidenceComponent />
      </div>
    </DefaultLayout>
  );
}