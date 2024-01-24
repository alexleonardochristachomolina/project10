import React from 'react';
import PropTypes from 'prop-types';
import {
  FavoriteBorderIcon,
  StarBorderIcon,
  StarHalfIcon,
  StarIcon,
} from '../../assets/control-icons';
import { Link } from 'react-router-dom';

export const ProductCard = ({ product }) => {
  const { id, image, price, brand, model } = product;
  return (
    <div className="flex items-center border rounded-lg max-w-sm sm:block">
      <div className="bg-white sm:border-b py-8 px-10">
        <img
          className="object-scale-down aspect-square w-full"
          src={image[0]}
          alt={model}
        />
      </div>

      <div className="flex gap-3 p-3 justify-between">
        <div className="flex flex-col ">
          <span className="text-[18px] font-semibold text-gray-600 sm:order-first">
            ${price}{' '}
            <span className="text-[#8B96A5] text-base line-through">
              $1128.00
            </span>
          </span>
          <div className="text-[#FF9017] flex gap-1 my-1">
            <div className="flex">
              <StarIcon className="p-[2px]" />
              <StarIcon className="p-[2px]" />
              <StarHalfIcon className="p-[2px]" />
              <StarBorderIcon className="p-[2px]" />
              <StarBorderIcon className="p-[2px]" />
            </div>
            7.5
          </div>
          <Link to={`/products/${id}`} className="order-first sm:order-last">
            <h2 className="text-[#606060] hover:underline">
              {brand} {model}
            </h2>
          </Link>
          <span className="sm:hidden text-green-600 text-xs">
            Free Shipping
          </span>
        </div>
        <div className="hidden sm:block">
          <FavoriteBorderIcon className="border w-10 h-10 p-2 rounded-md hover:bg-[#0D6EFD] cursor-pointer text-[#0D6EFD] hover:text-white transition-colors" />
        </div>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    image: PropTypes.array,
    price: PropTypes.number,
    brand: PropTypes.string,
    model: PropTypes.string,
  }),
};
