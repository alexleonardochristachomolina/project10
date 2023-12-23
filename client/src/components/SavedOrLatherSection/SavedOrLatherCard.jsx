import React from 'react';
import { ShoppingCartIconBlue } from '../../assets/header-icons';

export const SavedOrLatherCard = () => {
  return (
    <div className="container w-[270px] h-[382px] bg-white rounded-lg flex flex-col items-center justify-between p-3 gap-3">
      <div className="w-[270px] h-[240px] flex items-center justify-center">
        <div className="w-[225px] h-[225px] flex justify-center items-center">
          <img
            className="w-[97%] h-[95%]"
            src="https://m.media-amazon.com/images/I/61h1JmIy4UL._AC_SX679_.jpg"
            alt="producto"
          />
        </div>
      </div>
      <div className="w-full items-start">
        <h4 className="font-bold">$99.99</h4>
        <p className="w-[186px] h-[53px] text-gray-400 text-base overflow-hidden">
          Detalles del producto, lorem ipsum dolor sit amet consectetur
          adipisicing elit.
        </p>
        <button className="w-[156px] h-[40px] flex justify-center items-center gap-2 hug-w-97 hug-h-19 relative border border-solid border-gray-300 rounded">
          <ShoppingCartIconBlue className="w-22 h-22 absolute top-9 left-9" />
          <span className="font-inter text-base font-medium leading-19 text-customBlue">
            Move to cart
          </span>
        </button>
      </div>
    </div>
  );
};
