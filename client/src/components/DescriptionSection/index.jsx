import React from 'react';
import { CheckIcon } from '../../assets/seller-icons';

export const DescriptionSection = () => {
  const sections = [
    { title: 'Description', href: '#description', active: true },
    { title: 'Reviews', href: '#reviews', active: false },
    { title: 'Shipping', href: '#shipping', active: false },
    { title: 'About seller', href: '#about-seller', active: false },
  ];

  const details = [
    { label: 'Model', value: '#8786867' },
    { label: 'Style', value: 'Classic style' },
    { label: 'Certificate', value: 'ISO-898921212' },
    { label: 'Size', value: '34mm x 450mm x 19mm' },
  ];

  const features = [
    'Some great feature name here',
    'Lorem ipsum dolor sit amet, consectetur',
    'Duis aute irure dolor in reprehenderit',
    'Another feature name',
  ];

  return (
    <>
      <div className="max-w-7xl flex flex-col md:border-[1px] rounded-lg shadow">
        {/* Cabecera de la seccion de descripciones */}
        <ul className="flex overflow-x-auto text-gray-500 font-medium items-center pl-2 pr-2 border-b-[1px]  border-gray-300">
          {sections.map(({ title, href, active }) => (
            <li
              key={href}
              className={`p-[1rem] hover:bg-[#F1F1F1] ${
                active ? 'text-[#0D6EFD] border-b-2 border-[#0D6EFD]' : ''
              }`}
            >
              <a href={href} className="whitespace-nowrap">
                {title}
              </a>
            </li>
          ))}
        </ul>
        {/* Cuerpo de seccion de descripcione */}
        <section
          className="flex flex-col gap-y-4 p-[.75rem_1.75rem_1.75rem] w-[90%] text-gray-600 "
          id="description"
        >
          <p className="text-gray-600 max-w-5xl">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Lorem ipsum dolor sit amet, consectetur adipisicing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, Quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>

          {/* Tabla vertical */}
          <div className="grid grid-cols-2 bg-[#eff2f4] max-w-3xl">
            {details.map((detail, index) => (
              <React.Fragment key={index}>
                <p className="min-h-[2.25rem] flex items-center pl-[10px] border border-[#E0E7E9]">
                  {detail.label}
                </p>
                <span className="min-h-[2.25rem] flex items-center pl-[10px] border border-[#E0E7E9] bg-white">
                  {detail.value}
                </span>
              </React.Fragment>
            ))}
          </div>

          {features.map((feature, index) => (
            <div key={index} className="flex gap-x-2">
              <CheckIcon />
              <p>{feature}</p>
            </div>
          ))}
        </section>
      </div>
    </>
  );
};
