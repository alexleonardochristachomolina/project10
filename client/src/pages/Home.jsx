import React from 'react';
import { DiscountOffersSection } from '../components/Home/DiscountOffersSection';
import SliderHome from '../components/Home/SliderHome';
import { CategoriesSection } from '../components/Home/CategoriesSection';

const Home = () => {
  return (
    <div className="container max-w-7xl mx-auto flex flex-col gap-5">
      <SliderHome />
      <DiscountOffersSection />
      <CategoriesSection />
    </div>
  );
};

export default Home;
