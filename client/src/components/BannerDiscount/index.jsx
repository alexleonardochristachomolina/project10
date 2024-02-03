import React from 'react';

const BannerDiscount = () => {
  return (
    <div className="md:grid grid-cols-2 max-w-6xl w-full justify-center mx-auto hidden">
      {/* First Section */}
      <div className="flex flex-col bg-[#237CFF] py-5 px-8 xl:rounded-s-md">
        <h1 className="text-2xl text-white font-semibold">
          Super discount on more than 100 USD
        </h1>
        <p className="text-white text-base opacity-75">
          Have you ever finally just write a dummy info
        </p>
      </div>
      <div className="relative flex items-center justify-end bg-[#005ADE] py-5 px-8 xl:rounded-e-md">
        {/* First Section */}
        <div className="absolute border-solid border-t-[96px] border-l-[70px] border-t-transparent border-l-[#237CFF] left-0 top-0"></div>
        <button className="bg-[#FF9017] text-white px-4 py-2 rounded-md hover:bg-[#FF9917]">
          Shop now
        </button>
      </div>
    </div>
  );
};

export default BannerDiscount;
