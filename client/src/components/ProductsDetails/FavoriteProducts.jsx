/* eslint-disable react/prop-types */
import React from 'react';

const FavoriteProducts = ({ products }) => {
  return (
    <div className="w-full border-[1px] rounded-lg shadow bg-white p-4">
      <p className="mb-4 font-semibold">You may like</p>
      <div className="flex overflow-x-auto gap-2">
        {products?.map((product) => (
          <div key={product.id} className="flex gap-4 min-w-fit">
            <div className="w-[70px] h-[70px] px-[8.711px] py-[5.289px] border">
              <img src={product.image} alt="" className="h-12" />
            </div>
            <div>
              <h3 className="text-[#1C1C1C] w-36">{product.model}</h3>
              <span className="text-[#8B96A5]">$100 - ${product.price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavoriteProducts;
