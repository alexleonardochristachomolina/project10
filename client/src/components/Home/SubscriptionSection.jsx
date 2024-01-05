import React from 'react';
import { EmailIcon } from '../../assets/icons-form';

const SubscriptionSection = () => {
  return (
    <div className="bg-[#EFF2F4] flex flex-col items-center py-8 my-5">
      <h4 className=" font-semibold text-xl">Subscribe on our newsletter</h4>
      <p>
        Get daily news on upcoming offers from many suppliers all over the world
      </p>
      <div className="flex mt-5 gap-2">
        <div className="relative">
          <div className="absolute flex h-full items-center pl-1">
            <EmailIcon />
          </div>
          <input
            type="text"
            placeholder="Email"
            className="py-2 rounded-md w-64 outline-none pl-9 pr-1"
          />
        </div>
        <button className="bg-[#0067FF] text-white px-4 py-2 rounded-md">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default SubscriptionSection;
