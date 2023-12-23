import React from 'react';

export const CardRecomendados = () => {
  return (
    <div className="container w-[220px] h-[310px] bg-white rounded-md flex flex-col items-center justify-start p-3 gap-3">
      <div className="w-[200px] h-[200px] flex items-center justify-center">
        <img
          className="w-[95%] h-[95%]"
          src="https://m.media-amazon.com/images/I/61h1JmIy4UL._AC_SX679_.jpg"
          alt="producto"
        />
      </div>
      <div>
        <h4 className="font-bold">$99.99</h4>
        <p className="w-[186px] h-[53px] text-gray-400 text-base overflow-hidden">
          Detalles del producto, lorem ipsum dolor sit amet consectetur
          adipisicing elit.
        </p>
      </div>
    </div>
  );
};
