'use client';

import React from 'react';
import { UserDetailsComponent } from '@/modules/user/components/UserDetails';
import { DefaultLayout } from '@/global/layout/DefaultLayout';

export default function UserDetails() {
  return (
    <DefaultLayout>
      <div className="flex-1 container mx-auto p-8">
        <UserDetailsComponent />
      </div>
    </DefaultLayout>
  );
}
