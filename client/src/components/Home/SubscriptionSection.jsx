import React from 'react';
import { EmailIcon } from '../../assets/icons-form';

const SubscriptionSection = () => {
  return (
    <div className="bg-[#EFF2F4] flex flex-col px-4 py-8 my-5 sm:items-center">
      <h4 className=" font-semibold text-xl">Subscribe on our newsletter</h4>
      <p>
        Get daily news on upcoming offers from many suppliers all over the world
      </p>
      <form className="flex flex-col mt-5 gap-2 sm:flex-row">
        <div className="relative">
          <label
            className="absolute flex h-full items-center pl-2"
            htmlFor="email"
          >
            <EmailIcon />
          </label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="p-2 pl-11 min-w-full w-64 rounded-md"
          />
        </div>
        <button className="bg-customBlue text-white px-4 py-2 rounded-md">
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default SubscriptionSection;
