import React from 'react';
import {
  CheckIcon,
  DotIcon,
  MessageIcon,
  ShoppingBasquetIcon,
  StarIcon,
  StarIconDisabled,
} from '../../assets/seller-icons';
import { FavoriteBorderIcon } from '../../assets/control-icons';

export const ProductInfo = () => {
  return (
    <div className="w-full flex flex-col gap-2">
      <span className="flex text-[#00B517]">
        <CheckIcon /> In Stock
      </span>
      <h1 className="text-xl font-semibold">
        Mens Long Sleeve T-shirt Cotton Base Layer Slim Muscle
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
            <td className="whitespace-nowrap px-4 py-2">Negotiable</td>
          </tr>
          <tr>
            <td className="whitespace-nowrap px-4 py-2">Type:</td>
            <td className="whitespace-nowrap px-4 py-2">Classic shoes</td>
          </tr>
          <tr>
            <td className="whitespace-nowrap px-4 py-2">Material:</td>
            <td className="whitespace-nowrap px-4 py-2">Plastic material</td>
          </tr>
          <tr>
            <td className="whitespace-nowrap px-4 py-2">Design:</td>
            <td className="whitespace-nowrap px-4 py-2">Modern nice</td>
          </tr>
          <tr className="border-t border-[#E0E0E0]">
            <td className="whitespace-nowrap px-4 py-2">Customization:</td>
            <td className="px-4 py-2">
              Customized logo and design custom packages
            </td>
          </tr>
        </tbody>
      </table>
      <div className="flex justify-between">
        <button className="bg-[#0067FF] w-[180px] text-white font-medium rounded-lg">
          Buy
        </button>
        <button className="bg-[#00B517] w-[180px] text-white font-medium rounded-lg">
          Add to cart
        </button>
        <button className="border-2 w-10 h-10 rounded-lg flex items-center justify-center">
          <FavoriteBorderIcon className="text-[#0067FF]" />
        </button>
      </div>
    </div>
  );
};
