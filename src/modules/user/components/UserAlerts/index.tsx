import React from 'react';
import Link from 'next/link';
import { BackButton } from '@/global/components/BackPage';

export function UserAlertsComponent() {
  return (
    <div className="px-4 sm:px-8 mb-4 container">
      <h1 className="text-3xl font-bold">Notificações</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-8">
        <div className="border rounded-lg shadow-md px-4">
          <div className="grid grid-cols-[70%_30%] items-center justify-center">
            <div>
              <p className="sm:text-xl font-bold">Email</p>
            </div>
            <div className="flex items-center justify-center my-4 sm:justify-end">
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-14 h-7 bg-gray-200 rounded-full peer-focus:outline-none dark:bg-gray-600 peer-checked:bg-[#407398]"></div>
                <div className="absolute left-0.5 top-0.5 bg-white w-6 h-6 rounded-full transition-transform peer-checked:translate-x-7"></div>
              </label>
            </div>
          </div>
        </div>
        <div className="border rounded-lg shadow-md px-4">
          <div className="grid grid-cols-[70%_30%] items-center justify-center">
            <div>
              <p className="sm:text-xl font-bold">Navegador</p>
            </div>
            <div className="flex items-center justify-center my-4 sm:justify-end">
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-14 h-7 bg-gray-200 rounded-full peer-focus:outline-none dark:bg-gray-600 peer-checked:bg-[#407398]"></div>
                <div className="absolute left-0.5 top-0.5 bg-white w-6 h-6 rounded-full transition-transform peer-checked:translate-x-7"></div>
              </label>
            </div>
          </div>
        </div>
        <div className="border rounded-lg shadow-md px-4">
          <div className="grid grid-cols-[70%_30%] items-center justify-center">
            <div>
              <p className="sm:text-xl font-bold">SMS</p>
            </div>
            <div className="flex items-center justify-center my-4 sm:justify-end">
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-14 h-7 bg-gray-200 rounded-full peer-focus:outline-none dark:bg-gray-600 peer-checked:bg-[#407398]"></div>
                <div className="absolute left-0.5 top-0.5 bg-white w-6 h-6 rounded-full transition-transform peer-checked:translate-x-7"></div>
              </label>
            </div>
          </div>
        </div>
        <div className="border rounded-lg shadow-md px-4">
          <div className="grid grid-cols-[70%_30%] items-center justify-center">
            <div>
              <p className="sm:text-xl font-bold">E-mail Marketing</p>
            </div>
            <div className="flex items-center justify-center my-4 sm:justify-end">
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-14 h-7 bg-gray-200 rounded-full peer-focus:outline-none dark:bg-gray-600 peer-checked:bg-[#407398]"></div>
                <div className="absolute left-0.5 top-0.5 bg-white w-6 h-6 rounded-full transition-transform peer-checked:translate-x-7"></div>
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-6">
        <p className="text-sm">
          * Ao aceitar mensagens de texto, você concorda em receber mensagens de marketing
          automatizadas em +55 ** ***** 6902. Para receber mensagens em outro número, atualize as
          configurações de número de telefone na sua página de informações pessoais.
        </p>
        <p className="text-sm">
          * Ao desativar a opção "E-mail marketing", a sua inscrição em todos os emails de marketing
          será cancelada.
        </p>
      </div>
      <div className="grid grid-cols-2 mt-7">
        <div>
          <BackButton url="/user/account" />
        </div>
        <div className="flex justify-end">
          <Link
            href="/user/account"
            className="w-auto sm:w-auto h-10 bg-[#407398] text-white font-bold py-2 px-4 rounded-lg hover:bg-[#2c5c7e] focus:outline-none"
          >
            Atualizar
          </Link>
        </div>
      </div>
    </div>
  );
}
