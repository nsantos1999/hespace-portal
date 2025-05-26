'use client';

import React from 'react';
import { UserUpdatePasswordComponent } from '@/modules/user/components/UserSecurityUpdatePassword';
import { DefaultLayout } from '@/global/layout/DefaultLayout';

export default function UserUpdatePassword() {
  return (
    <DefaultLayout>
      <div className="flex-1 container mx-auto p-8">
        <UserUpdatePasswordComponent />
      </div>
    </DefaultLayout>
  );
}
