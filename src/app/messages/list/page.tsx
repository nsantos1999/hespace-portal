'use client';

import React from 'react';
import { MessageListComponent } from '@/modules/messages/components/MessageList';
import { DefaultLayout } from '@/global/layout/DefaultLayout';

export default function MessageList() {
  return (
    <DefaultLayout>
      <div className="flex-1 container mx-auto p-8">
        <MessageListComponent />
      </div>
    </DefaultLayout>
  );
}
