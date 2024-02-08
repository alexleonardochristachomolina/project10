/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';

export const CardRecomendados = ({ product }) => {
  return (
    <div className="bg-white rounded-md flex flex-col items-center p-3 gap-3 border">
      <img className="h-32 p-3" src={product.image} alt={product.model} />
      <div className="md:text-base">
        <h4 className="font-bold text-[#1C1C1C]">${product.price}</h4>
        <Link
          to={`/products/${product.id}`}
          className="order-first sm:order-last"
        >
          <p className="text-gray-400 text-sm hover:underline">
            {product.brand} {product.model}
          </p>
        </Link>
      </div>
    </div>
  );
};
