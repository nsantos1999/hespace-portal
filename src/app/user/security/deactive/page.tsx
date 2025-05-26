'use client';

import React from 'react';
import { UserSecurityDeactiveComponent } from '@/modules/user/components/UserSecurityDeactive';
import { DefaultLayout } from '@/global/layout/DefaultLayout';

export default function UserSecurityDeactive() {

  return (
    <DefaultLayout>
      <div className="flex-1 container mx-auto p-8">
        <UserSecurityDeactiveComponent />
      </div>
    </DefaultLayout>
  );
}