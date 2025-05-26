import React, { useState } from 'react';
import Link from 'next/link';
import { BackButton } from '@/global/components/BackPage';

export function UserSecurityDeactiveComponent() {
  const [showTextarea, setShowTextarea] = useState(false);

  return (
    <div className="px-4 sm:px-8 mb-4 container">
      <h1 className="text-3xl font-bold mb-1">Tem certeza que deseja desativar sua conta?</h1>
      <div className="grid grid-cols-1 ">
        <p className="text-gray-600 font-bold ml-1">karine.simoni@gmail.com</p>
      </div>
      <div className="border shadow-md rounded-lg p-5 my-4">
        <div className="grid grid-cols-1 gap-2">
          <p className="text-gray-600">
            O perfil e os anúncios associados a esta conta desaparecerão.
          </p>
          <p className="text-gray-600">
            Você não conseguirá acessar as reservas anteriores ou suas informações.
          </p>
        </div>

        <div className="space-y-4 mt-5">
          <p className="text-lg font-semibold">Selecione um motivo:</p>
          <div className="flex flex-col space-y-2">
            <label className="flex items-center">
              <input
                type="radio"
                name="reason"
                value="security"
                className="cursor-pointer form-radio text-[#93c4e8]"
                onChange={(e) => setShowTextarea(e.target.value === 'other')}
              />
              <span className="ml-2">Tenho dúvidas sobre a segurança ou privacidade.</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="reason"
                value="availability"
                className="cursor-pointer form-radio text-[#93c4e8]"
                onChange={(e) => setShowTextarea(e.target.value === 'other')}
              />
              <span className="ml-2">Não posso mais disponibilizar espaços.</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="reason"
                value="tos"
                className="cursor-pointer form-radio text-[#93c4e8]"
                onChange={(e) => setShowTextarea(e.target.value === 'other')}
              />
              <span className="ml-2">Não posso cumprir os Termos de Serviço/Compromisso.</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="reason"
                value="other"
                className="cursor-pointer form-radio text-[#93c4e8]"
                onChange={(e) => setShowTextarea(e.target.value === 'other')}
              />
              <span className="ml-2">Outro</span>
            </label>
          </div>

          {showTextarea && (
            <textarea
              className="mt-4 w-full h-32 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#93c4e8]"
              placeholder="Informe o motivo"
            />
          )}
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2">
        <label className="flex items-center pb-4">
          <input
            type="radio"
            name="confirm_deactive"
            value="other"
            className="cursor-pointer form-radio text-[#93c4e8]"
          />
          <span className="ml-2">Confirmar Ação</span>
        </label>
        <div className="flex justify-end">
          <Link
            href="/user/security/deactived"
            className="flex items-center justify-center w-80 sm:w-28 h-10 bg-[#c45151] text-white font-bold py-2 px-4 rounded-lg hover:bg-[#973f3f] focus:outline-none content-center"
          >
            Desativar
          </Link>
        </div>
      </div>
      <div className="pt-6">
        <BackButton url="/user/security" />
      </div>
    </div>
  );
}
