'use client';

import React from 'react';
import { SpaceListComponent } from '@/modules/spaces/components/SpaceList';
import { DefaultLayout } from '@/global/layout/DefaultLayout';
import { SearchFormComponent } from '@/modules/spaces/components/SpaceSearch';

export default function SpaceList() {
  return (
    <DefaultLayout
      extraNavbarComponent={<SearchFormComponent onSearch={() => console.log('Search')} />}
    >
      <div className="flex-1">
        <SpaceListComponent />
      </div>
    </DefaultLayout>
  );
}
