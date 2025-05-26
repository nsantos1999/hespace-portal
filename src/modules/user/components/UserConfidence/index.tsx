import React from 'react';
import { BackButton } from '@/global/components/BackPage';

export function UserConfidenceComponent() {

  const handleCardClick = (url: string) => {
    console.log('teste');
  };

  return (
    <div className="px-4 sm:px-8 mb-4 container">
      <h1 className="text-3xl font-bold mb-4">Privacidade e Compartilhamento</h1>
      <div className="mb-8">
        <p className="text-gray-600">Controle como seu perfil e suas atividades são exibidos para os outros usuários.</p>
      </div>
      
      <div className="border rounded-lg shadow-md p-5 my-8">
        <div className="grid grid-cols-1 sm:grid-cols-[70%_30%] items-center justify-center"> 
          <div>
            <p className="text-xl font-bold">Confirmação de leitura</p>
            <p className="text-gray-500 mt-4">
              Permitir que outras pessoas saibam quando você leu as mensagens recebidas.
            </p>
            <p className="text-gray-500 mt-2">
              Essa opção está ativada por padrão e pode ser desativada a qualquer momento.
            </p>
          </div>
          <div className="flex items-center justify-center my-4 sm:justify-end">
            <label className="relative inline-flex items-center cursor-pointer">
              <input 
                type="checkbox" 
                className="sr-only peer"
                onChange={() => handleCardClick('url')} 
              />
              <div className="w-14 h-7 bg-gray-200 rounded-full peer-focus:outline-none dark:bg-gray-600 peer-checked:bg-[#407398]"></div>
              <div className="absolute left-0.5 top-0.5 bg-white w-6 h-6 rounded-full transition-transform peer-checked:translate-x-7"></div>
            </label>
          </div>
        </div>
      </div>
      <BackButton url="/user/account" />


    </div>


  );
}
