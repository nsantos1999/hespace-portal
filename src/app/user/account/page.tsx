'use client';

import React from 'react';
import { UserAccountComponent } from '@/modules/user/components/UserAccount';
import { DefaultLayout } from '@/global/layout/DefaultLayout';

export default function UserAccount() {

  return (
    <DefaultLayout>
      <div className="flex-1 container mx-auto p-8">
        <UserAccountComponent />
      </div>
    </DefaultLayout>
  );
}