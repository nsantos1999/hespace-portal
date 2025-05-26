'use client';

import React, { useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useOutsideAction } from '@/global/hooks/useOutsideClickAction';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/modules/auth/hooks/useAuth';
import { LoginDialog, LoginDialogRef } from '@/modules/auth/components/LoginDialog';
import { Logo } from '../Logo';

interface NavbarProps {
  extraComponent?: React.ReactNode;
}

export function Navbar({ extraComponent }: NavbarProps) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const router = useRouter();
  const { authUser, isLogged, logout } = useAuth();

  const loginDialogRef = useRef<LoginDialogRef>(null);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const dropdownElementRef = useRef(null);
  useOutsideAction(dropdownElementRef, () => setDropdownOpen(false));

  const handleOpenLoginDialog = () => {
    loginDialogRef.current?.openDialog();
  };

  const handleLogout = () => {
    logout();
  };

  const goToHome = () => {
    router.push('/');
  };

  return (
    <nav className="">
      <div className="container mx-auto flex sm:flex-col items-center justify-between p-4">
        <button className="relative w-96 h-24" onClick={goToHome}>
          <Logo />
        </button>

        <div className="flex items-center md:hidden">
          <button
            onClick={toggleDropdown}
            className="text-gray-500 hover:text-gray-700 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>

        <div className="hidden absolute md:right-4 sm:flex md:flex-col md:items-end">
          <div className="flex items-center pt-7 pr-2">
            <div className="flex items-center border border-[#93c4e8] rounded-2xl p-2">
              <button
                onClick={toggleDropdown}
                className="flex items-center justify-center text-[#407398] hover:text-gray-400 focus:outline-none"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
                <div className="w-7 h-7 rounded-full ml-2 bg-gray-300 flex items-center justify-center ">
                  <Image
                    src={isLogged ? (authUser?.avatar.content ?? '') : '/images/user-avatar.jpg'}
                    alt="User Avatar"
                    width={30}
                    height={30}
                    className="rounded-full"
                  />
                </div>
              </button>
            </div>
          </div>
          <Link href="/spaces/create" className="pb-2 pr-2 pt-2 font-bold text-right text-sm">
            Anuncie seu espaço de saúde
          </Link>
        </div>

        {dropdownOpen && (
          <div
            ref={dropdownElementRef}
            className="absolute right-5 top-[5.5rem] border-[#93c4e8] border-2 w-72 bg-white rounded-md shadow-lg z-10"
          >
            {isLogged && (
              <>
                <div className="px-4 py-2 text-gray-800 flex ">
                  <div className="rounded-full ml-2 flex  items-center justify-center ">
                    <Image
                      src={isLogged ? (authUser?.avatar.content ?? '') : '/images/user-avatar.jpg'}
                      alt="User Avatar"
                      width={50}
                      height={50}
                      className="rounded-full"
                    />
                  </div>
                  <div className="flex flex-1 flex-col">
                    <p className="text-center">{authUser?.name}</p>
                    <p className="text-center text-sm font-semibold">{authUser?.email}</p>
                  </div>
                </div>
                <hr className="border-[#93c4e8] border-t-1 ml-2 mr-2" />
              </>
            )}

            <Link href="/messages/list" className="block px-4 py-3 text-gray-800 hover:bg-gray-200">
              Mensagens
            </Link>
            <hr className="border-[#93c4e8] border-t-1 ml-2 mr-2" />
            <Link href="/spaces/create" className="block px-4 py-3 text-gray-800 hover:bg-gray-200">
              Anuncie seu espaço de saúde
            </Link>
            <Link href="/user/account" className="block px-4 py-3 text-gray-800 hover:bg-gray-200">
              Conta
            </Link>
            <hr className="border-[#93c4e8] border-t-1 ml-2 mr-2" />
            {isLogged ? (
              <button
                className="block px-4 py-3 text-error-main hover:bg-error-lighter w-full"
                onClick={handleLogout}
              >
                Sair da conta
              </button>
            ) : (
              <button
                className="block px-4 py-3 text-gray-800 hover:bg-gray-200 w-full"
                onClick={handleOpenLoginDialog}
              >
                Realize login
              </button>
            )}
          </div>
        )}
      </div>

      {extraComponent && (
        <div className="container mx-auto flex flex-col items-center pb-1">{extraComponent}</div>
      )}

      <hr className="border-[#93c4e8] border-t-2" />
      <LoginDialog ref={loginDialogRef} />
    </nav>
  );
}
