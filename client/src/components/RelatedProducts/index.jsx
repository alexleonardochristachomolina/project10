/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';

export const RelatedProducts = ({ products }) => {
  return (
    <>
      <div className="w-fit p-[1.625rem_1.375rem_2rem] rounded-md border border-gray-300">
        <h4 className="font-semibold text-xl mb-4">Related products</h4>

        <div className="flex gap-x-5 overflow-x-auto">
          {products?.slice(0, 6).map((product) => (
            <div
              key={product.id}
              className="flex flex-col gap-y-[.875rem] min-w-fit"
            >
              <picture className="bg-[#EEE] p-5 rounded-md">
                <img
                  src={product.image}
                  alt={product.model}
                  className="h-[10.75rem] w-[10.75rem] object-contain brightness-110 mix-blend-multiply"
                />
              </picture>

              <div className="flex flex-col gap-y-2 w-4/5">
                <Link
                  to={`/products/${product.id}`}
                  className="text-[#505050] hover:underline"
                >
                  {product.model} {product.model}
                </Link>
                <p className="text-[#8B96A5]">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
