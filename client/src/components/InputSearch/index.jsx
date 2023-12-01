import React, { useState } from 'react';
import search from '../../assets/search.svg';

const inputSearch = () => {
  const [searchValue, setSearchValue] = useState('');

  return (
    <div className="flex">
      <div className="w-full  bg-gray-100 border-2 rounded-lg md:rounded-l-lg md:rounded-r-none border-gray-300 md:border-blue-500  p-2">
        <form className="flex items-center">
          <label htmlFor="inputSearch" className="hidden">
            input search
          </label>
          <div className="md:hidden pr-2">
            <img src={search} alt="" />
          </div>
          <input
            id="inputSearch"
            type="search"
            className="bg-inherit outline-none w-full"
            placeholder="Search..."
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </form>
      </div>
      <button
        className="hidden items-center md:inline-block  bg-gradient-to-b from-blue-500 to-blue-600/90 rounded-r-lg text-white px-4 py-2 text-xl"
        type="submit"
      >
        search
      </button>
    </div>
  );
};

export default inputSearch;
