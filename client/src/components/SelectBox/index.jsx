import React from 'react';
// import { ExpandMoreIcon } from '../../assets/control-icons';

export const SelectBox = () => {
  return (
    <>
      <select
        id="select-show"
        className="w-32 h-10 flex justify-center place-items-center border-2 border-solid gap-x-5 rounded-md outline-none"
      >
        <option value="default">Show 10</option>
        <option value="show20">Show 20</option>
        <option value="show30">Show 30</option>
        {/* <button>
          <ExpandMoreIcon />
        </button> */}
      </select>
    </>
  );
};
