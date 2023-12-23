import React from 'react';
import { SavedOrLatherCard } from './SavedOrLatherCard';

export const SavedOrLatherSection = () => {
  return (
    <section className="w-[1180px] h-[475px] border border-gray-300">
      <h4 className="m-5 font-bold text-xl">Saved for later</h4>
      <div className="flex flex-row justify-around">
        <SavedOrLatherCard />
        <SavedOrLatherCard />
        <SavedOrLatherCard />
        <SavedOrLatherCard />
      </div>
    </section>
  );
};
