import React from 'react';
import board from '../../assets/banner/Banner-board.png';
import user from '../../assets/banner/user.png';

const Banner = () => {
  return (
    <div
      className="bg-white md:border-grey-300 md:border-4 md:rounded-md
      flex flex-row md:p-5 my-5 gap-x-5
    "
    >
      <div className="relative text-[#1C1C1C]">
        <img
          src={board}
          alt="Banner board"
          className="md:rounded-md h-full object-center object-cover"
        />
        <div className="absolute top-[15%] left-[5%]">
          <span className="text-lg sm:text-2xl lg:text-3xl">
            <p>Latest trending</p>
            <b>Electronic items</b>
          </span>

          <div className="mt-6">
            <a href="#" className="bg-white px-8 py-2 rounded-md">
              Learn more
            </a>
          </div>
        </div>
      </div>
      <div className="min-w-fit hidden md:flex md:flex-col md:gap-y-3">
        <div className="bg-[#E3F0FF] p-3 rounded-md">
          <div className="flex flex-row gap-x-3 mb-3">
            <img src={user} alt="User image" className="w-11" />
            <p className="w-1/2">Hi, user let&apos;s get started</p>
          </div>
          <div className="flex flex-col text-center">
            <a
              href="#"
              className="bg-customBlue py-1 rounded-md m-1 text-white"
            >
              Join now
            </a>
            <a
              href="/login"
              className="bg-white py-1 rounded-md m-1 text-customBlue
            border-gray-300 border-1"
            >
              Log in
            </a>
          </div>
        </div>
        <div className="bg-orange-500 p-5 rounded-md text-white">
          <p className="w-1/2">Get US $10 off with a new supplier</p>
        </div>
        <div className="bg-teal-500 p-5 rounded-md text-white">
          <p className="w-1/2">Send quotes with supplier preferences</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
