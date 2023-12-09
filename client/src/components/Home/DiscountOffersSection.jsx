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
    <div className="bg-white flex justify-between h-60 rounded-lg border">
      <div className="pl-[1.25rem] pt-[1.25rem]">
        <h2 className="text-xl font-semibold">Deals and offers</h2>
        <p className="text-[#8B96A5] mb-5">Hygiene equipments</p>
        <div className="flex gap-2">
          {timeData.map(({ label, value }, index) => (
            <div
              key={index}
              className="bg-[#606060] text-white w-[2.8125rem] h-[3.125rem] flex flex-col justify-center items-center rounded"
            >
              <span className="font-bold">{value}</span>
              <span className="text-xs">{label}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="flex">
        {offers.map((offer) => (
          <div
            key={offer.title}
            className="px-[1.25rem] py-[0.5rem] border h-full flex flex-col items-center gap-3"
          >
            <img
              src={offer.img}
              alt={offer.title}
              className="w-[8.75rem] h-[8.75rem]"
            />
            <h3>{offer.title}</h3>
            <span className="text-[#EB001B] bg-[#FFE3E3] px-[0.81rem] text-sm font-medium rounded-full py-1">
              -{offer.discount}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
