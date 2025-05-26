'use client';

import React from 'react';
import { UserAlertsComponent } from '@/modules/user/components/UserAlerts';
import { DefaultLayout } from '@/global/layout/DefaultLayout';

export default function UserAlerts() {

  return (
    <DefaultLayout>
      <div className="flex-1 container mx-auto p-8">
        <UserAlertsComponent />
      </div>
    </DefaultLayout>
  );
}