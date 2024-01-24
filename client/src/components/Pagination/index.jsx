import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from '../../assets/left-right-chevron';

export const Pagination = () => {
  const pageDefault = 1;
  const [num, setNum] = useState(pageDefault);
  const [cur, setCur] = useState(pageDefault);

  const pages = [
    { page: num },
    { page: num + 1 },
    { page: num + 2 },
    { page: num + 3 },
  ];

  const Next = () => {
    setNum(num + 1);
  };

  const Previous = () => {
    num > 1 && setNum(num - 1);
  };

  return (
    <>
      <div className="flex flex-1 justify-between sm:hidden">
        <a
          href="#"
          className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Anterior
        </a>
        <a
          href="#"
          className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Siguiente
        </a>
      </div>
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          <nav
            className="isolate inline-flex -space-x-px rounded-md shadow-sm"
            aria-label="Pagination"
          >
            <button
              onClick={Previous}
              className="rounded-l-md px-3 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              <span className="sr-only">Anterior</span>
              <ChevronLeft />
            </button>

            {pages.map((e, index) => (
              <button
                key={index}
                onClick={() => setCur(e.page)}
                className={`relative w-11 py-2 text-base font-medium text-[#1C1C1C] ring-1 ring-inset ring-gray-300 
                ${
                  cur === e.page
                    ? 'bg-[#DEE2E7] text-[#8B96A5]'
                    : 'hover:bg-gray-100 focus:z-20 focus:outline-offset-0'
                }
                `}
              >
                {e.page}
              </button>
            ))}

            <button
              onClick={Next}
              className="rounded-r-md px-3 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              <span className="sr-only">Siguiente</span>
              <ChevronRight />
            </button>
          </nav>
        </div>
      </div>
    </>
  );
};
