import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

interface SearchFormProps {
  onSearch: (searchParams: { local: string; inicio: Date | null; fim: Date | null }) => void;
}

export function SearchFormComponent({ onSearch }: SearchFormProps) {
  const [local, setLocal] = useState('');
  const [inicio, setInicio] = useState<Date | null>(null);
  const [fim, setFim] = useState<Date | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch({ local, inicio, fim });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col md:flex-row items-center gap-4 px-4 pb-3 pt-2"
    >
      {/* Campo Local */}
      <div className="w-full">
        <input
          type="text"
          id="local"
          value={local}
          onChange={(e) => setLocal(e.target.value)}
          placeholder="Busque seu espaço de saúde"
          className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:border-[#93c4e8]"
        />
      </div>
      <div className="hidden md:block border-l border-gray-300 h-8 mx-2" /> {/* Linha vertical */}
      {/* Campo Data de Início */}
      <div className="w-full">
        <DatePicker
          selected={inicio}
          onChange={(date) => setInicio(date)}
          className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:border-[#93c4e8]"
          placeholderText="Data de início Ex.: 01/01/2024"
          dateFormat="dd/MM/yyyy" // Formato de data ajustável
          popperPlacement="bottom" // Define a posição do calendário
          withPortal // Usado para renderizar o calendário em um portal (opcional)
        />
      </div>
      <div className="hidden md:block border-l border-gray-300 h-8 mx-2" /> {/* Linha vertical */}
      {/* Campo Data Final */}
      <div className="w-full">
        <DatePicker
          selected={fim}
          onChange={(date) => setFim(date)}
          className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:border-[#93c4e8]"
          placeholderText="Data final Ex.: 29/01/2024"
          dateFormat="dd/MM/yyyy" // Formato de data ajustável
          popperPlacement="bottom" // Define a posição do calendário
          withPortal // Usado para renderizar o calendário em um portal (opcional)
        />
      </div>
      <div className="hidden md:block border-l border-gray-300 h-8 mx-2" /> {/* Linha vertical */}
      {/* Botão de Pesquisa */}
      <div className="w-1/5">
        <button
          type="submit"
          className="w-full flex items-center justify-center bg-[#407398] text-white font-bold py-2 px-4 rounded-lg hover:bg-[#305b78] focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-6-6m2-5a7 7 0 10-14 0 7 7 0 0014 0z"
            />
          </svg>
        </button>
      </div>
    </form>
  );
}
