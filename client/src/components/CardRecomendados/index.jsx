import React from 'react';

export const CardRecomendados = () => {
  return (
    <div className="bg-white rounded-md flex flex-col items-center p-3 gap-3 border">
      <img
        className="w-full h-auto p-3"
        src="https://m.media-amazon.com/images/I/61h1JmIy4UL._AC_SX679_.jpg"
        alt="producto"
      />
      <div className="md:text-base">
        <h4 className="font-bold text-[#1C1C1C]">$99.99</h4>
        <p className="text-gray-400 text-sm">
          T-shirts with multiple colors, for men
        </p>
      </div>
    </div>
  );
};
