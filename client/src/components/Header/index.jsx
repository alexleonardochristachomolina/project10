import React from 'react';
import InputSearch from '../InputSearch';
import hambuger from '../../assets/hambuger.svg';
import logo from '../../assets/logo-symbol.svg';
import person from '../../assets/person.svg';
import car from '../../assets/shopping_cart.svg';

const Header = () => {
  return (
    <header className="container mx-auto p-4 ">
      <div className="flex gap-4 justify-between">
        <div className="flex  gap-4 items-center">
          <div>
            <img src={hambuger} alt="icon" />
          </div>
          <div className="flex">
            <img src={logo} alt="logo" />
            <h1 className="font-bold text-2xl text-blue-400">Brand</h1>
          </div>
        </div>
        <div className="md:inline-block flex-auto hidden mx-20">
          <InputSearch />
        </div>
        <div className="flex items-center gap-4">
          <div className="flex flex-col">
            <img className="h-6" src={car} alt="icon" />
            <p className="hidden md:inline md:text-gray-500">My cart</p>
          </div>
          <div className="flex flex-col">
            <img className="h-6 " src={person} alt="icon" />
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
