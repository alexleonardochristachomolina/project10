import React, { useEffect } from 'react';
import { DiscountOffersSection } from '../components/Home/DiscountOffersSection';
import SliderHome from '../components/Home/SliderHome';
import SectionRecomendados from '../components/Home/SectionRecomendados';
import { CategoriesSection } from '../components/Home/CategoriesSection';
import Banner from '../components/Banner';
import SubscriptionSection from '../components/Home/SubscriptionSection';
import CategoryImg from '../assets/home-img/categories-01.png';
import CategoryImg2 from '../assets/home-img/categories-02.png';
import useStore from '../utils/store';

const Home = () => {
  const { products, fetchProducts } = useStore();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <>
      <div className="container max-w-6xl mx-auto flex flex-col gap-5 md:px-4">
        <Banner />
        <DiscountOffersSection products={products} />
        <CategoriesSection
          title="Home and outdoor"
          products={products}
          img={CategoryImg}
        />
        <CategoriesSection
          title="Consumer electronics and gadgets"
          img={CategoryImg2}
          products={products}
        />
        <SliderHome />
        <SectionRecomendados products={products} />
      </div>
      <SubscriptionSection />
    </>
  );
};

export default Home;
