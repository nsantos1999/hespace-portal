'use client';

import React, { useState } from 'react';

export function Footer() {
  return (
    // <footer className="bg-gray-800 text-white mt-4 py-6">
    <footer className="footer bg-gray-100 text-black border-t border-t-[#93c4e8] mt-4 py-6 ">
      <div className="mx-auto pt-7 px-20">
        <div className="flex flex-col md:flex-row justify-between items-start">
          <div className="mb-4 md:mb-0 grid grid-cols-1 md:grid-cols-3 gap-24">
            <ul className="flex flex-col space-y-4">
              <li><a href="#" className="hover:text-gray-400">Privacidade</a></li>
              <li><a href="#" className="hover:text-gray-400">Termos</a></li>
              <li><a href="#" className="hover:text-gray-400">Mapa do Site</a></li>
            </ul>
            <ul className="flex flex-col space-y-4">
              <li><a href="#" className="hover:text-gray-400">Sobre o Hespace</a></li>
              <li><a href="#" className="hover:text-gray-400">Português (BR)</a></li>
              <li><a href="#" className="hover:text-gray-400">R$ BRL</a></li>
            </ul>
            <ul className="flex flex-col space-y-4">
              <li><a href="#" className="hover:text-gray-400">Suporte e Recursos</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-auto text-sm text-center flex justify-end">
          <p>© 2024 hespace, Inc.</p>
        </div>
      </div>
    </footer>
  );
}
