'use client';

import React from 'react';
import { UserSecurityComponent } from '@/modules/user/components/UserSecurity';
import { DefaultLayout } from '@/global/layout/DefaultLayout';

export default function UserSecurity() {

  return (
    <DefaultLayout>
      <div className="flex-1 container mx-auto p-8">
        <UserSecurityComponent />
      </div>
    </DefaultLayout>
  );
}