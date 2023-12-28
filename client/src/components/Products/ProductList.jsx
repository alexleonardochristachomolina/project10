import React from 'react';
import {
  ButtonIconGroup,
  ButtonIconList,
  CloseIcon,
} from '../../assets/control-icons';

const ProductList = () => {
  const categories = [
    'Samsung',
    'Apple',
    'Poco',
    'Metallic',
    '4 star',
    '3 star',
  ];
  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center justify-between bg-white border border-[#DEE2E7] rounded-[6px] p-[10px]">
        <div>
          <span>12,911 items in Mobile accessory</span>
        </div>
        <div className="flex items-center gap-[10px]">
          <div className="flex items-center gap-[10px]">
            <input type="checkbox" className="cursor-pointer" />{' '}
            <span>Verified only</span>
          </div>
          <select
            name="featured"
            id="featured"
            className="border-2 w-44 outline-none p-[6px] rounded-[6px] cursor-pointer"
          >
            <option value="all">All Products</option>
            <option value="latest">Latest Releases</option>
            <option value="sale">Special Offers</option>
            <option value="bestsellers">Bestsellers</option>
            <option value="toprated">Top Rated</option>
          </select>
          <div className="flex">
            <div className="w-[38px] h-10 bg-[#EFF2F4] grid place-items-center border border-[#DEE2E7] rounded-l-md cursor-pointer">
              <ButtonIconGroup />
            </div>
            <div className="w-[38px] h-10 bg-white grid place-items-center border border-[#DEE2E7] rounded-r-md cursor-pointer">
              <ButtonIconList />
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-2 items-center">
        {categories.map((cat, i) => (
          <div key={i} className="inline-block ">
            <span className="flex items-center text-[#505050] bg-white pb-1 pt-[2px] pl-[10px] pr-[6px] gap-2 border-2 border-[#0D6EFD] rounded-md">
              {cat} <CloseIcon className="cursor-pointer" />
            </span>
          </div>
        ))}
        <span className="text-[#0D6EFD] cursor-pointer hover:underline">
          Clear all filter
        </span>
      </div>
      <div>Cards</div>
    </div>
  );
};

export default ProductList;
