import React from 'react';
import {
  ShoppingCartIcon,
  PersonIcon,
  HambuergerIcon,
} from '../../assets/header-icons';
import InputSearch from '../InputSearch';
import Logo from '../Logo';

const Header = () => {
  return (
    <header className="container mx-auto p-4 ">
      <div className="flex gap-4 justify-between">
        <div className="flex  gap-4 items-center">
          <div>
            <HambuergerIcon />
          </div>
          <div className="flex">
            <Logo />
          </div>
        </div>
        <div className="md:inline-block flex-auto hidden mx-20">
          <InputSearch />
        </div>
        <div className="flex items-center gap-4">
          <div className="flex flex-col items-center">
            <ShoppingCartIcon />
            <p className="hidden md:inline md:text-gray-500">My cart</p>
          </div>
          <div className="flex flex-col items-center">
            <PersonIcon />
            <p className="hidden md:inline md:text-gray-500">Profile</p>
          </div>
        </div>
      </div>
      <div className="md:hidden mt-4">
        <InputSearch />
      </div>
    </header>
  );
};

export default Header;
