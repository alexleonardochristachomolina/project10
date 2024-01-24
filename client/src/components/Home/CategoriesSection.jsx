import React from 'react';
import PropTypes from 'prop-types';
import { ArrowForward } from '../../assets/home-img/Index';

export const CategoriesSection = ({ title, categories, img }) => {
  return (
    <div className="bg-white flex flex-col lg:flex-row md:rounded-lg border relative">
      <div className="relative">
        <h2 className="text-xl font-semibold m-5 lg:absolute z-10">{title}</h2>
        <img
          src={img}
          alt={title}
          className="min-w-fit h-full object-right object-cover hidden lg:block rounded-s-lg"
        />
      </div>

      <ul className="grid grid-flow-col lg:grid-rows-2 overflow-x-auto w-full">
        {categories.map(({ category, from, img }, index) => (
          <li
            key={index}
            className="min-w-[9rem] px-6 py-3 border flex flex-col gap-y-3 items-center justify-between lg:flex-row lg:pb-0 lg:pr-0"
          >
            <div className="self-start whitespace-pre">
              <a href="#" className="block text-[#1C1C1C] hover:underline">
                {category}
              </a>
              <span className="text-[#8B96A5] text-sm w-1/2">
                From {''}
                <span className="lg:block">USD {from}</span>
              </span>
            </div>

            <figure className="p-1 order-first lg:order-none lg:self-end">
              <img
                src={img}
                alt={category}
                className="max-h-[6rem] w-auto object-scale-down"
              />
            </figure>
          </li>
        ))}
      </ul>

      <button className="font-medium px-4 py-3 text-[#0D6EFD] text-left bg-white hover:bg-slate-100 lg:absolute lg:top-1/2 lg:ml-5 lg:rounded-md lg:text-black">
        Source Now
        <ArrowForward className="inline ml-2 lg:hidden" />
      </button>
    </div>
  );
};

CategoriesSection.propTypes = {
  title: PropTypes.string.isRequired,
  categories: PropTypes.array.isRequired,
  img: PropTypes.string.isRequired,
};
