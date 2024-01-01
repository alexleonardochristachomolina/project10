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
    <div className="bg-white border rounded-lg w-72">
      <div className="border-b py-8 px-12">
        <div className="w-52 h-52 flex justify-center">
          <img src={image[0]} alt="" />
        </div>
      </div>
      <div className="flex gap-3 p-5 justify-between">
        <div className="flex flex-col ">
          <span className="text-[18px] font-semibold">
            ${price} <span className="text-[#8B96A5] text-base">$1128.00</span>
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
          <Link to={`/products/${id}`}>
            <h2 className="text-[#606060] hover:underline">
              {brand} {model}
            </h2>
          </Link>
        </div>
        <div>
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
