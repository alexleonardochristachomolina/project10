import React from 'react';
import { ShoppingCartIconBlue } from '../../assets/header-icons';

export const SavedOrLatherCard = () => {
  return (
    <div className="container border rounded-lg md:border-0">
      <div className="flex md:flex-col items-center justify-evenly p-2 gap-3">
        <picture className="p-4 md:rounded-lg w-1/3 md:w-full md:bg-[#eee]">
          <img
            className="min-w-[5rem] w-full object-scale-down aspect-square brightness-110 mix-blend-multiply"
            src="https://m.media-amazon.com/images/I/61h1JmIy4UL._AC_SX679_.jpg"
            alt="producto"
          />
        </picture>
        <div className="flex flex-col gap-2 items-start text-sm mt-1 md:gap-3 p-2">
          <h4 className="font-bold md:text-lg">$99.99</h4>
          <p className="w-4/5 text-gray-600 order-first md:order-none md:text-base">
            GoPro HERO6 4K Action Camera - Black
          </p>

          <div className="flex gap-x-3 whitespace-nowrap">
            <button className="py-2 px-3 flex justify-center items-center gap-2 border border-gray-300 rounded-lg">
              <ShoppingCartIconBlue className="hidden md:block" />
              <span className="text-sm font-medium md:text-base text-customBlue">
                Move to cart
              </span>
            </button>

            <button className="py-2 px-3 border border-gray-300 rounded-lg md:hidden">
              <span className="text-sm font-medium md:text-base text-[#FA3434]">
                Remove
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
