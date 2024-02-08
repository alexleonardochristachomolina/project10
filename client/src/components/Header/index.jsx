import React from 'react';
import {
  ShoppingCartIcon,
  PersonIcon,
  HamburgerIcon,
} from '../../assets/header-icons';
import InputSearch from '../InputSearch';
import Logo from '../Logo';
import { Link } from 'react-router-dom';
import useStore from '../../utils/store';

const Header = () => {
  const { cart } = useStore();
  return (
    <header className="container mx-auto p-4 w-11/12 max-w-7xl">
      <div className="flex gap-4 justify-between">
        <div className="flex gap-4 items-center">
          <HamburgerIcon className="md:hidden" />
          <Link to="/" className="flex">
            <Logo />
          </Link>
        </div>
        <div className="md:inline-block flex-auto hidden mx-20">
          <InputSearch />
        </div>
        <div className="flex items-center gap-4">
          <Link to="/cart" className="flex flex-col items-center">
            <div className="relative">
              <ShoppingCartIcon />
              {cart.length > 0 && (
                <div className="absolute -top-1 -right-1 text-xs bg-green-400 text-white w-4 h-4 rounded-full text-center">
                  {cart.length}
                </div>
              )}
            </div>
            <p className="hidden md:inline md:text-gray-500">My cart</p>
          </Link>
          <Link to="/auth" className="flex flex-col items-center">
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
