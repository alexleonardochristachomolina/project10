import React, { useEffect, useState } from 'react';
import { timeLeft } from '../../utils/DiscountTimer';

function useInterval(callback, delay) {
  useEffect(() => {
    const id = setTimeout(callback, delay);
    return () => clearTimeout(id);
  }, [callback, delay]);
}

export const DiscountOffersSection = () => {
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

  const offers = [
    {
      img: 'https://res.cloudinary.com/dlfwgaprv/image/upload/v1702084106/ejemplos/klipartz.com_pjzkxj.png',
      title: 'Amazfit GTS 2',
      discount: 25,
    },
    {
      img: 'https://res.cloudinary.com/dlfwgaprv/image/upload/v1702084106/ejemplos/klipartz.com_pjzkxj.png',
      title: 'Amazfit GTS 2',
      discount: 25,
    },
    {
      img: 'https://res.cloudinary.com/dlfwgaprv/image/upload/v1702084106/ejemplos/klipartz.com_pjzkxj.png',
      title: 'Amazfit GTS 2',
      discount: 25,
    },
    {
      img: 'https://res.cloudinary.com/dlfwgaprv/image/upload/v1702084106/ejemplos/klipartz.com_pjzkxj.png',
      title: 'Amazfit GTS 2',
      discount: 25,
    },
    {
      img: 'https://res.cloudinary.com/dlfwgaprv/image/upload/v1702084106/ejemplos/klipartz.com_pjzkxj.png',
      title: 'Amazfit GTS 2',
      discount: 25,
    },
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
        {offers.map(({ img, title, discount }, id) => (
          <div className="px-6 py-3 border flex flex-col items-center" key={id}>
            <figure className="p-2">
              <img src={img} alt={title} className="aspect-square" />
            </figure>

            <h3 className="whitespace-nowrap mb-2">{title}</h3>

            <span className="text-[#EB001B] bg-[#FFE3E3] px-[0.81rem] text-sm font-medium rounded-full py-1">
              -{discount}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
