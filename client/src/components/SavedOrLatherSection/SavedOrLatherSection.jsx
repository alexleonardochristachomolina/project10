import React from 'react';
import { SavedOrLatherCard } from './SavedOrLatherCard';

export const SavedOrLatherSection = () => {
  return (
    <section className="bg-white border border-gray-300 mx-auto w-full px-5 pb-5 xl:rounded-lg">
      <h4 className="my-5 font-bold text-xl">Saved for later</h4>
      <div className="flex flex-col gap-y-2 md:flex-row  overflow-x-auto">
        <SavedOrLatherCard />
        <SavedOrLatherCard />
        <SavedOrLatherCard />
        <SavedOrLatherCard />
      </div>
    </section>
  );
};
