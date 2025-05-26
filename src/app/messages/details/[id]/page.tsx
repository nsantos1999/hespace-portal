'use client';

import React from 'react';
import { MessageDetailsComponent } from '@/modules/messages/components/MessageDetails';
import { DefaultLayout } from '@/global/layout/DefaultLayout';

export default function MessageDetails() {
  return (
    <DefaultLayout>
      <div className="flex-1 container mx-auto p-8">
        <MessageDetailsComponent />
      </div>
    </DefaultLayout>
  );
}
