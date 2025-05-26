import React, { useState } from 'react';
import Link from 'next/link';
import { MESSAGES } from '../../constants/messages.constants';

export function MessageListComponent() {
  const [filter, setFilter] = useState('all_messages');

  const filterMessages = () => {
    if (filter === 'all_messages') {
      return MESSAGES.filter((message) => !message.archived_on);
    } else if (filter === 'not_read') {
      return MESSAGES.filter((message) => !message.read_on && !message.archived_on);
    } else if (filter === 'archived') {
      return MESSAGES.filter((message) => message.archived_on);
    }
    return MESSAGES;
  };

  const filteredMessages = filterMessages();

  const getButtonClass = (buttonFilter: string) =>
    filter === buttonFilter
      ? 'md:col-span-1 px-1 py-2 bg-primary-main text-white font-bold rounded-lg hover:bg-primary-dark transition duration-200'
      : 'md:col-span-1 px-1 py-2 bg-white border-[1px] font-semibold border-primary-main text-primary-main rounded-lg hover:bg-primary-main hover:text-white transition duration-200';

  return (
    <div className="container px-4 sm:px-8 mb-4">
      <h1 className="text-3xl font-bold mb-4">Mensagens</h1>

      <div className="grid md:grid-cols-3 grid-cols-8 gap-2 mb-8 md:w-[30rem] text-sm ">
        <button
          id="all_messages"
          className={`col-span-2 ${getButtonClass('all_messages')}`}
          onClick={() => setFilter('all_messages')}
        >
          Todas
        </button>
        <button
          id="not_read"
          className={`col-span-3 ${getButtonClass('not_read')}`}
          onClick={() => setFilter('not_read')}
        >
          Não Lidas
        </button>
        <button
          id="archived"
          className={`col-span-3 ${getButtonClass('archived')}`}
          onClick={() => setFilter('archived')}
        >
          Arquivadas
        </button>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {filteredMessages.length > 0 ? (
          filteredMessages.map((screen) => (
            <Link
              key={screen.id}
              className="border rounded-lg shadow-md p-4 cursor-pointer"
              href={`/messages/details/${screen.id}`}
            >
              <div className="grid grid-cols-6 items-center">
                <div className="col-span-5">
                  <h3
                    className={`text-lg font-bold ${screen.read_on ? 'text-gray-600' : 'text-black'} truncate ...`}
                  >
                    {screen.title}
                  </h3>
                  <p className="mt-2 text-gray-600 truncate ...">{screen.content}</p>
                </div>

                <div className="col-span-1 flex flex-col sm:flex-row justify-end items-end gap-1 z-50">
                  <Link
                    className="text-gray-500 hover:text-blue-500 transition duration-200"
                    title="Exibir"
                    href={`/messages/details/${screen.id}`}
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
                        d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                      />
                    </svg>
                  </Link>
                  <Link
                    className="text-gray-500 hover:text-red-500 transition duration-200"
                    title="Excluir"
                    href={`/messages/delete/${screen.id}`}
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
                    href={`/messages/archive/${screen.id}`}
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
              </div>
            </Link>
          ))
        ) : (
          <h3 className="text-lg font-bold text-gray-600">
            Você há mensagens para serem exibidas nesta categoria
          </h3>
        )}
      </div>
    </div>
  );
}
