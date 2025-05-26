import React, { useState } from 'react';
import Link from 'next/link';

export function UserSecurityDeactivedComponent() {
  return (
    <div className="px-4 sm:px-[25%] container">
      <div className="flex flex-col items-center py-6 text-center">
        <h1 className="text-3xl font-bold">Sua conta foi desativada</h1>
        <div className="border shadow-md rounded-full px-4 mt-2">
          <p className="text-gray-600 font-semibold py-2 text-sm">karine.simoni@gmail.com</p>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-2 pt-4 items-center justify-center">
        <p className="text-gray-600">Seu perfil e seus anúncios não estão mais visíveis.</p>
        <p className="text-gray-600">
          Você não poderá mais acessar esta conta ou as reservas associadas à ela.
        </p>
      </div>
      <div className="flex justify-end mt-8">
        <Link
          href="/"
          className="w-auto sm:w-auto h-10 bg-[#407398] text-white font-bold py-2 px-4 rounded-lg hover:bg-[#2c5c7e] focus:outline-none"
        >
          Voltar ao início
        </Link>
      </div>
    </div>
  );
}
