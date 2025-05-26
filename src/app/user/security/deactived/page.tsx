'use client';

import React from 'react';
import { UserSecurityDeactivedComponent } from '@/modules/user/components/UserSecurityDeactived';
import { DefaultLayout } from '@/global/layout/DefaultLayout';

export default function UserSecurityDeactived() {

  return (
    <DefaultLayout>
      <div className="flex-1 container mx-auto p-8">
        <UserSecurityDeactivedComponent />
      </div>
    </DefaultLayout>
  );
}