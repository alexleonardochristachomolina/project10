import React from 'react';
import {
  ShoppingCartIcon,
  PersonIcon,
  HambuergerIcon,
} from '../../assets/header-icons';
import InputSearch from '../InputSearch';
import Logo from '../Logo';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="container mx-auto p-4 ">
      <div className="flex gap-4 justify-between">
        <div className="flex  gap-4 items-center">
          <div>
            <HambuergerIcon />
          </div>
          <Link to="/" className="flex">
            <Logo />
          </Link>
        </div>
        <div className="md:inline-block flex-auto hidden mx-20">
          <InputSearch />
        </div>
        <div className="flex items-center gap-4">
        <Link to='/cart' className="flex flex-col items-center">
            <ShoppingCartIcon />
            <p className="hidden md:inline md:text-gray-500">My cart</p>
          </Link>
          <Link to='/auth' className="flex flex-col items-center">
            <PersonIcon />
            <p className="hidden md:inline md:text-gray-500">Profile</p>
          </Link>
        </div>
      </div>
      <div className="md:hidden mt-4">
        <InputSearch />
      </div>
    </header>
  );
};

export default Header;
