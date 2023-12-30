import React from 'react';
import { ExpandMoreIcon } from '../../assets/control-icons';

export const SelectBox = () => {
  return (
    <>
      <div className="w-32 h-10 flex justify-center place-items-center border-2 border-solid gap-x-5 rounded-md">
        <span className="text-base text-[#1c1c1c]">Show 10</span>

        <button>
          <ExpandMoreIcon />
        </button>
      </div>
    </>
  );
};
