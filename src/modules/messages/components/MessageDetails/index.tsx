import React from 'react';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import Link from 'next/link';

const formattedDate = format(new Date(), "dd/MM/yyyy - H'h'm'm'", { locale: ptBR });

export function MessageDetailsComponent() {
  return (
    <div className="sm:px-10 container mx-auto">
      <h1 className="text-3xl font-bold mb-4">Mensagens</h1>
      <div className="flex space-x-1">
        <Link
          className="text-gray-500 hover:text-blue-500 transition duration-200"
          title="Exibir"
          href="/messages/list"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        </Link>
        <Link
          className="text-gray-500 hover:text-red-500 transition duration-200"
          title="Excluir"
          href=""
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
            />
          </svg>
        </Link>
        <Link
          className="text-gray-500 hover:text-green-500 transition duration-200"
          title="Arquivar"
          href=""
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5m8.25 3v6.75m0 0-3-3m3 3 3-3M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"
            />
          </svg>
        </Link>
      </div>
      <div className="border rounded-lg shadow-md p-8 my-2">
        <div className="grid grid-cols-1 items-center justify-center">
          <div>
            <p className="text-xl font-bold">Aluguel sala XPTA</p>
            <p className="text-gray-500 mt-4">José da Silva</p>
            <p className="text-gray-500">seg., 2 de set., 09:09 (há 3 dias)</p>
            <p className="text-gray-500 mt-4">
              Quero mais informações sobre a sala sobre o equipamento XPTO. <br />
              <br />
              Atenciosamente,
              <br />
              Jose da Silva
            </p>
          </div>
          <div className="border-l-4 border-primary-main mt-6 ml-6 pl-4">
            <p className="text-gray-500">{`${formattedDate} (Horário de Brasilia)`}</p>
            <div className="mt-2">
              <textarea
                id="details"
                className="text-gray-500 rounded-lg focus:outline-none block w-full"
                rows={4}
                placeholder="Responda esta mensagem"
                required
              ></textarea>
            </div>
          </div>
        </div>
        <div className="flex justify-end mt-4">
          <button className="w-auto sm:w-auto h-10 bg-[#407398] text-white font-bold py-2 px-4 rounded-lg hover:bg-[#2c5c7e] focus:outline-none">
            Responder
          </button>
        </div>
      </div>
    </div>
  );
}
