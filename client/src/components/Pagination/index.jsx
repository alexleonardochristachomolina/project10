/* eslint-disable react/prop-types */
import React from 'react';
import { ChevronLeft, ChevronRight } from '../../assets/left-right-chevron';

export const Pagination = ({
  currentPage,
  setCurrentPage,
  nextPage,
  prevPage,
  totalPages,
}) => {
  const pages = [
    currentPage,
    currentPage + 1,
    currentPage + 2,
    currentPage + 3,
  ];
  return (
    <>
      <div className="flex flex-1 justify-between sm:hidden">
        <button
          disabled={currentPage === 1}
          onClick={prevPage}
          className="inline-flex items-center rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Anterior
        </button>

        <button
          onClick={nextPage}
          className="inline-flex items-center rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Siguiente
        </button>
      </div>
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          <nav
            className="isolate inline-flex -space-x-px rounded-md shadow-sm"
            aria-label="Pagination"
          >
            <button
              disabled={currentPage === 1}
              onClick={prevPage}
              className="rounded-l-md px-3 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              <span className="sr-only">Anterior</span>
              <ChevronLeft />
            </button>

            {pages.map((page, index) => (
              <button
                disabled={page > totalPages}
                key={index}
                onClick={() => {
                  setCurrentPage(page);
                }}
                className={`relative w-11 py-2 text-base font-medium text-[#1C1C1C] ring-1 ring-inset ring-gray-300 
                ${
                  currentPage === page
                    ? 'bg-[#DEE2E7] text-[#8B96A5]'
                    : 'hover:bg-gray-100 focus:z-20 focus:outline-offset-0'
                }
                `}
              >
                {page}
              </button>
            ))}

            <button
              disabled={currentPage >= totalPages}
              onClick={nextPage}
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
