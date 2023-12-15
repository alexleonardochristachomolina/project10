import React from 'react';
import { HambuergerIcon } from '../../assets/header-icons';
import { ExpandMoreIcon } from '../../assets/control-icons';

const Navbar = () => {
  return (
    <section className="text-gray-900 font-medium body-font border-0 sm:border-t-2 sm:border-b-2 border-gray-200">
      <div className="container p-4 hidden sm:flex md:flex lg:flex xl:flex mx-auto items-start">
        <nav className="flex items-center text-base">
          <a className="mr-5 hover:text-gray-500 active:text-blue-500" href="#">
            <div className="flex">
              <HambuergerIcon /> <span className="ml-1">All category</span>
            </div>
          </a>
          <a className="mr-5 hover:text-gray-500 active:text-blue-500" href="#">
            Hot offers
          </a>
          <a className="mr-5 hover:text-gray-500 active:text-blue-500" href="#">
            Gift boxes
          </a>
          <a className="mr-5 hover:text-gray-500 active:text-blue-500" href="#">
            News
          </a>
          <a className="hover:text-gray-500 active:text-blue-500" href="#">
            <div className="flex">
              Help <ExpandMoreIcon />
            </div>
          </a>
        </nav>
      </div>
    </section>
  );
};

export default Navbar;
