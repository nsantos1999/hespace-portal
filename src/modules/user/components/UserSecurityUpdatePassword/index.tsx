import React from 'react';
import { BackButton } from '@/global/components/BackPage';

export function UserUpdatePasswordComponent() {

  return (
    <div className="px-4 sm:px-8 mb-4 container">
      <h1 className="text-3xl font-bold mb-4">Atualizar senha</h1>
      <div className="mb-8">
        <p className="text-gray-600">Confirme a senha atual para definir uma nova senha de acesso.</p>
      </div>
      
      <form>
        <div className="mb-4">
          <label htmlFor="currentPassword" className="block text-gray-700 font-medium mb-2">
            Senha Atual
          </label>
          <input
            type="password"
            id="currentPassword"
            name="currentPassword"
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:border-[#93c4e8]"
            placeholder="Digite sua senha atual"
          />
        </div>

        <hr className="border-[#93c4e8] border-t-1 my-5" />

        <div className="mb-4">
          <label htmlFor="newPassword" className="block text-gray-700 font-medium mb-2">
            Nova Senha
          </label>
          <input
            type="password"
            id="newPassword"
            name="newPassword"
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:border-[#93c4e8]"
            placeholder="Digite a nova senha"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="confirmPassword" className="block text-gray-700 font-medium mb-2">
            Confirmar Nova Senha
          </label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:border-[#93c4e8]"
            placeholder="Confirme a nova senha"
          />
        </div>

        <div className="grid grid-cols-2 mt-7">
          <div>
            <BackButton url="/user/security" />
          </div>
          <div className="flex justify-end">
            <button
              className="w-auto sm:w-auto h-10 bg-[#407398] text-white font-bold py-2 px-4 rounded-lg hover:bg-[#2c5c7e] focus:outline-none"
            >
              Salvar
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
