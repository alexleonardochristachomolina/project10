/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { timeLeft } from '../../utils/DiscountTimer';
import { Link } from 'react-router-dom';

function useInterval(callback, delay) {
  useEffect(() => {
    const id = setTimeout(callback, delay);
    return () => clearTimeout(id);
  }, [callback, delay]);
}

export const DiscountOffersSection = ({ products }) => {
  const [time, setTime] = useState(timeLeft());

  useInterval(() => {
    setTime(timeLeft());
  }, 1000);

  const timeData = [
    { label: 'Days', value: time.days },
    { label: 'Hour', value: time.hours },
    { label: 'Min', value: time.minutes },
    { label: 'Sec', value: time.seconds },
  ];

  return (
    <div className="bg-white sm:flex justify-between sm:rounded-lg sm:border">
      <div className="flex justify-between px-5 pt-5 sm:block">
        <span>
          <h2 className="col-span-3 text-xl font-semibold">Deals and offers</h2>
          <p className="text-[#8B96A5] mb-5">Hygiene equipments</p>
        </span>
        <ul className="flex gap-2">
          {timeData.map(({ label, value }, index) => (
            <li
              key={index}
              className="bg-gray-200 text-gray-500 sm:bg-[#606060] sm:text-white w-[2.8125rem] h-[3.125rem] flex flex-col justify-center items-center rounded first:hidden first:sm:flex"
            >
              <span className="font-bold">{value}</span>
              <span className="text-xs">{label}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex overflow-x-auto">
        {products.slice(0, 5).map(({ brand, model, image, id }) => (
          <div className="px-6 py-3 border flex flex-col items-center" key={id}>
            <figure className="p-2 w-28">
              <img src={image} alt={brand} className="aspect-square" />
            </figure>
            <Link to={`/products/${id}`} className="order-first sm:order-last">
              <h3 className="whitespace-nowrap mb-2 hover:underline">
                {model}
              </h3>
            </Link>

            <span className="text-[#EB001B] bg-[#FFE3E3] px-[0.81rem] text-sm font-medium rounded-full py-1">
              -25%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
