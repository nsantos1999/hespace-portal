import React from 'react';
import Link from 'next/link';
import { BackButton } from '@/global/components/BackPage';


export function UserSecurityComponent() {

  return (
    <div className="px-4 sm:px-8 mb-4 container">
      <h1 className="text-3xl font-bold mb-4">Login e Segurança</h1>

      <div className="border rounded-lg shadow-md p-5 my-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 items-center justify-center"> 
          <div className="">
            <p className="text-xl font-bold">Login</p>
            <p className="mt-1">Atualizar senha</p>
            <p className="text-gray-500 mt-2">Última atualização há 4 anos</p>
          </div>
          <div className="flex items-center justify-center my-4 sm:justify-end">
            <Link 
              href="/user/security/updatePassword"
              className="flex items-center justify-center w-80 sm:w-28 h-10 bg-[#407398] text-white font-bold py-2 px-4 rounded-lg hover:bg-[#305b78] focus:outline-none"
              >
              Atualizar
            </Link>
          </div>
        </div>
      </div>

      <div className="border rounded-lg shadow-md p-5 my-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 items-center justify-center"> 
          <div className="">
            <p className="text-xl font-bold">Conta</p>
            <p className="mt-1">Desativar sua conta</p>
          </div>
          <div className="flex items-center justify-center my-4 sm:justify-end">
            <Link
              href="/user/security/deactive"
              className="flex items-center justify-center w-80 sm:w-28 h-10 bg-[#c45151] text-white font-bold py-2 px-4 rounded-lg hover:bg-[#973f3f] focus:outline-none content-center"
              >
              Desativar
            </Link>
          </div>
        </div>
      </div>
      <BackButton url="/user/account"/>

    </div>


  );
}
