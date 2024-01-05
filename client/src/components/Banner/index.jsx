import React from 'react';
import board from '../../assets/banner/Banner-board.png';
import user from '../../assets/banner/user.png';

const Banner = () => {
  return (
    <div
      className=" bg-white border-grey-300 border-4 rounded-md
      flex flex-row p-5 max-h-96 mx- my-5
    "
    >
      <div className=" w-auto grow relative ">
        <img src={board} alt="Banner board" className="rounded-md h-auto" />
        <div className="absolute top-10 left-14">
          <p>Lastest trending</p>
          <p>Electronic items</p>
          <div className="mt-6">
            <a href="" className="bg-white p-1 rounded-md ">
              Learn more
            </a>
          </div>
        </div>
      </div>
      <div className="container w-auto h-autor    ">
        <div className=" bg-cyan-100  ml-1 p-6 rounded-md h-auto">
          <div className="flex flex-row gap-1 ">
            <img src={user} alt="User image" className="w-6 mr-4" />
            <p>Hi, let`s get started</p>
          </div>
          <br />
          <div className="grid grid-cols-1 justify-center text-center">
            <a href="#" className="bg-blue-700 p-1 rounded-md m-1 text-white">
              Join now
            </a>
            <a
              href="/login"
              className="bg-white p-1 rounded-md m-1 text-blue-700
            border-gray-300 border-1"
            >
              Log in
            </a>
          </div>
        </div>
        <div className="bg-orange-500 m-2 p-5 rounded-md text-white">
          <p>Get US $10 off with a new supplier</p>
        </div>
        <div className="bg-teal-500 h-200 w-95 m-2 p-5 rounded-md text-white">
          <p>Send quotes with supplier preferences</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
