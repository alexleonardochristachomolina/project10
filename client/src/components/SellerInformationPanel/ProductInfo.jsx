import React from 'react';
import PropTypes from 'prop-types';
import {
  CheckIcon,
  DotIcon,
  MessageIcon,
  ShoppingBasquetIcon,
  StarIcon,
  StarIconDisabled,
} from '../../assets/seller-icons';
import { FavoriteBorderIcon } from '../../assets/control-icons';
import useStore from '../../utils/store';

export const ProductInfo = ({ info }) => {
  const { cart, addToCart, removeFromCart } = useStore();
  const isInCart = cart.some((item) => item.id === info.id);

  const handleClick = () => {
    if (isInCart) {
      removeFromCart(info.id);
    } else {
      addToCart(info);
    }
  };
  return (
    <div className="w-full flex flex-1 flex-col order-3 gap-2">
      <span className="flex text-[#00B517]">
        <CheckIcon /> In Stock
      </span>
      <h1 className="text-xl font-semibold">
        {info.brand} {info.model} {info.operatingSystem}
      </h1>
      <div className="flex items-center gap-3 text-[#787A80]">
        <div className="flex items-center gap-2 text-[#FF9017]">
          <span className="flex">
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIconDisabled />
          </span>
          9.3
        </div>
        <DotIcon />
        <div className="flex items-center gap-2">
          <MessageIcon /> 32 reviews
        </div>
        <DotIcon />
        <div className="flex items-center gap-2">
          <ShoppingBasquetIcon /> 154 sold
        </div>
      </div>
      <div className="flex bg-[#FFF0DF] p-4">
        <div className="flex w-36 flex-col ">
          <span className="text-lg text-[#FA3434] font-semibold">$98.00</span>
          <span className="text-[#606060]">50-100 pcs</span>
        </div>
        <div className="flex w-36 flex-col border-l border-[#BDC1C8] pl-2">
          <span className="text-lg font-semibold">$90.00</span>
          <span className="text-[#606060]">100-700 pcs</span>
        </div>
        <div className="flex flex-col border-l border-[#BDC1C8] pl-2">
          <span className="text-lg font-semibold">$78.00</span>
          <span className="text-[#606060]">700+ pcs</span>
        </div>
      </div>
      <table className="w-full text-[#8B96A5]">
        <tbody>
          <tr className="border-b border-[#E0E0E0]">
            <td className="whitespace-nowrap px-4 py-2">Price:</td>
            <td className="whitespace-nowrap px-4 py-2">$ {info.price}</td>
          </tr>
          <tr>
            <td className="whitespace-nowrap px-4 py-2">Color:</td>
            <td className="whitespace-nowrap px-4 py-2">{info.color}</td>
          </tr>
          <tr>
            <td className="whitespace-nowrap px-4 py-2">Screen Resolution:</td>
            <td className="whitespace-nowrap px-4 py-2">
              {info.screenResolution}
            </td>
          </tr>
          <tr>
            <td className="whitespace-nowrap px-4 py-2">Main Camera:</td>
            <td className="whitespace-nowrap px-4 py-2">
              {info.mainCamera} MP
            </td>
          </tr>
          <tr className="border-t border-[#E0E0E0]">
            <td className="whitespace-nowrap px-4 py-2">Connectivity:</td>
            <td className="px-4 py-2">{info.connectivity}</td>
          </tr>
        </tbody>
      </table>
      <div className="flex gap-1">
        <button className="bg-[#0067FF] w-[180px] text-white font-medium rounded-lg">
          Buy
        </button>
        <button
          disabled={isInCart}
          onClick={handleClick}
          className={`w-[180px] text-white font-medium rounded-lg ${
            isInCart ? 'bg-[#81e78e]' : 'bg-[#29e442]'
          }`}
        >
          {isInCart ? 'In cart' : 'Add to cart'}
        </button>
        <button className="border-2 w-10 h-10 rounded-lg flex items-center justify-center">
          <FavoriteBorderIcon className="text-[#0067FF]" />
        </button>
      </div>
    </div>
  );
};

ProductInfo.propTypes = {
  info: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.arrayOf(PropTypes.object),
  ]).isRequired,
};
