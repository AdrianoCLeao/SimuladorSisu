import React from 'react';
import Image from 'next/image';
import Logo from '@/public/A-Plataform-Logo-preta-e1725138557660.png';

const Navbar = () => {
  return (
    <nav className="bg-white w-full flex relative justify-between items-center mx-auto px-8 h-20">
      <div className="inline-flex">
        <a href="/" className="_o6689fn">
          <div className="hidden md:block">
            <Image src={Logo} alt="Logo" width={150} height={40} />
          </div>
        </a>
      </div>
      <div className="hidden lg:flex lg:items-center lg:w-auto lg:space-x-6">
        <a className="text-sm text-gray-400 hover:text-gray-500" href="#">
          Navbar
        </a>
        <a className="text-sm text-gray-400 hover:text-gray-500" href="#">
          Aleatoria
        </a>
        <a className="text-sm text-gray-400 hover:text-gray-500" href="#">
          Pra
        </a>
        <a className="text-sm text-gray-400 hover:text-gray-500" href="#">
          Preencher
        </a>
        <a className="text-sm text-gray-400 hover:text-gray-500" href="#">
          Espaço
        </a>
      </div>
      <div className="hidden lg:flex lg:items-center lg:space-x-6">
        <a
          className="inline-flex items-center bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-lg"
          href="/signin"
        >
          Sign In
        </a>
        <a
          className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
          href="/signup"
        >
          Sign Up
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
