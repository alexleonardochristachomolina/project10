import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ControlButton from '../ControlButton/Index';
import { MoreVertIcon } from '../../assets/control-icons/index';
import useStore from '../../utils/store';

const CartCardProduct = ({ prod, removeFromCart }) => {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useStore();

  // console.log(quantity);
  const {
    id,
    image,
    brand,
    model,
    internalStorage,
    color,
    ramMemory,
    battery,
    price,
    stock,
  } = prod;

  const handleRemove = () => {
    removeFromCart(id);
  };

  const handleQuantityChange = (e) => {
    const newQuantity = Number(e.target.value);
    setQuantity(newQuantity);
    addToCart(prod, newQuantity);
  };

  const priceFinal = (price * quantity).toFixed(2);
  // console.log(priceFinal);

  return (
    <div className="last:border-b-0 flex flex-col gap-y-4 justify-between border-b py-5 px-5 md:px-0 md:mx-5 md:flex-row">
      <div className="flex gap-3">
        <figure className="self-baseline flex-shrink-0 border rounded-md">
          <img
            src={image}
            className="h-20 w-20 object-scale-down object-center rounded-md"
            alt=""
          />
        </figure>
        <div className="flex flex-col gap-1">
          <h2 className="font-medium text-base leading-5">
            {brand} {model}
          </h2>
          <div className="leading-4 text-sm text-[#8B96A5]">
            <p>
              Storage: {internalStorage}, Color: {color}, RAM: {ramMemory}
            </p>
            <p>Battery: {battery}</p>
          </div>
          <div className="hidden gap-2 mt-2 md:flex">
            <button
              onClick={handleRemove}
              className="border rounded-md text-[#FA3434] font-medium text-[13px] px-[10px] py-1 hover:bg-[#0D6EFD] hover:text-white"
            >
              Remove
            </button>
            <button className="border rounded-md text-[#0D6EFD] font-medium text-[13px] px-[10px] py-1 hover:bg-[#0D6EFD] hover:text-white">
              Save for later
            </button>
          </div>
        </div>

        <button type="button" className="w-10 h-10 md:hidden">
          <MoreVertIcon />
        </button>
      </div>
      <div className="flex md:flex-col gap-4 items-end justify-between md:justify-start">
        <ControlButton className="md:hidden" />

        <span className="text-base font-medium">${priceFinal}</span>
        <div className="flex gap-2">
          <span className="text-base font-medium">quantity:</span>
          <select
            name="quantity"
            id=""
            className="w-12 px-2 py-1 border rounded-md outline-none hidden md:block"
            value={quantity}
            onChange={handleQuantityChange}
          >
            {[...Array(stock)].map((_, index) => (
              <option key={index} value={index + 1}>
                {index + 1}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

CartCardProduct.propTypes = {
  prod: PropTypes.shape({
    image: PropTypes.string.isRequired,
    brand: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
    internalStorage: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    ramMemory: PropTypes.string.isRequired,
    battery: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    stock: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
  removeFromCart: PropTypes.func.isRequired,
};

export default CartCardProduct;
