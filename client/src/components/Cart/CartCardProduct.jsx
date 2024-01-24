import React from 'react';
import PropTypes from 'prop-types';

const CartCardProduct = ({ prod }) => {
  const { img, name, size, color, material, seller, price, stock } = prod;
  return (
    <div className="flex justify-between border-b py-5">
      <div className="flex gap-3">
        <div className="w-[80px] h-[80px] px-3 py-2 border rounded-md">
          <img src={img} alt="" />
        </div>
        <div className="flex flex-col gap-1">
          <h2 className="font-medium">{name}</h2>
          <p className="text-[#8B96A5]">
            Size: {size}, Color: {color}, Material: {material}
          </p>
          <p className="text-[#8B96A5]">Seller: {seller}</p>
          <div className="flex gap-2 mt-2">
            <button className="border rounded-md text-[#FA3434] font-medium text-[13px] px-[10px] py-1 hover:bg-[#0D6EFD] hover:text-white">
              Remove
            </button>
            <button className="border rounded-md text-[#0D6EFD] font-medium text-[13px] px-[10px] py-1 hover:bg-[#0D6EFD] hover:text-white">
              Save for later
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 items-end">
        <span className="font-medium">${price}</span>
        <select
          name="quantity"
          id=""
          className="w-28 px-2 py-1 border rounded-md outline-none"
        >
          <option value="">quantity</option>
          {[...Array(stock)].map((_, index) => (
            <option key={index + 1} value={index + 1}>
              {index + 1}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

CartCardProduct.propTypes = {
  prod: PropTypes.shape({
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    size: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    material: PropTypes.string.isRequired,
    seller: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    stock: PropTypes.number.isRequired,
  }).isRequired,
};

export default CartCardProduct;
