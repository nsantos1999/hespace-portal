import React from 'react';
import Link from 'next/link';
import { ACCOUNT_SCREENS } from '../../constants/account-screens.constants';
import { useAuth } from '@/modules/auth/hooks/useAuth';

export function UserAccountComponent() {
  const { authUser } = useAuth();

  return (
    <div className="container px-4 sm:px-8 mb-4">
      <h1 className="text-3xl font-bold mb-4">Conta</h1>

      <div className="mb-8">
        <p className="text-lg font-medium">{authUser?.name}</p>
        <p className="text-gray-600">{authUser?.email}</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10">
        {ACCOUNT_SCREENS.map((screen) => (
          <Link
            key={screen.id}
            className="border rounded-lg shadow-md p-4 cursor-pointer"
            href={screen.url}
          >
            <div className="w-12 h-auto relative cursor-pointer">
              <img
                src={screen.icon}
                className="block h-full w-full rounded-lg object-cover object-center"
              />
            </div>
            <h3 className="mt-4 text-lg font-bold">{screen.title}</h3>
            <p className="mt-2 text-gray-600">{screen.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
