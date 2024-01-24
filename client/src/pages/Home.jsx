import React from 'react';
import { DiscountOffersSection } from '../components/Home/DiscountOffersSection';
import SliderHome from '../components/Home/SliderHome';
import SectionRecomendados from '../components/Home/SectionRecomendados';
import { CategoriesSection } from '../components/Home/CategoriesSection';
import Banner from '../components/Banner';
import SubscriptionSection from '../components/Home/SubscriptionSection';
import CategoryImg from '../assets/home-img/categories-01.png';
import CategoryImg2 from '../assets/home-img/categories-02.png';

const Home = () => {
  const categories = [
    {
      img: 'https://res.cloudinary.com/dlfwgaprv/image/upload/v1702084106/ejemplos/klipartz.com_pjzkxj.png',
      category: 'Soft Chairs',
      from: 19,
    },
    {
      img: 'https://res.cloudinary.com/dlfwgaprv/image/upload/v1702084106/ejemplos/klipartz.com_pjzkxj.png',
      category: 'Sofa / chair',
      from: 19,
    },
    {
      img: 'https://res.cloudinary.com/dlfwgaprv/image/upload/v1702084106/ejemplos/klipartz.com_pjzkxj.png',
      category: 'Kitchen dishes',
      from: 19,
    },
    {
      img: 'https://res.cloudinary.com/dlfwgaprv/image/upload/v1702084106/ejemplos/klipartz.com_pjzkxj.png',
      category: 'Smart watches',
      from: 19,
    },
    {
      img: 'https://res.cloudinary.com/dlfwgaprv/image/upload/v1702084106/ejemplos/klipartz.com_pjzkxj.png',
      category: 'Kitchen mixer',
      from: 100,
    },
    {
      img: 'https://res.cloudinary.com/dlfwgaprv/image/upload/v1702084106/ejemplos/klipartz.com_pjzkxj.png',
      category: 'Blenders',
      from: 39,
    },
    {
      img: 'https://res.cloudinary.com/dlfwgaprv/image/upload/v1702084106/ejemplos/klipartz.com_pjzkxj.png',
      category: 'Home appliance',
      from: 19,
    },
    {
      img: 'https://res.cloudinary.com/dlfwgaprv/image/upload/v1702084106/ejemplos/klipartz.com_pjzkxj.png',
      category: 'Coffee maker',
      from: 10,
    },
  ];

  return (
    <>
      <div className="container max-w-7xl mx-auto flex flex-col gap-5 md:px-4">
        <Banner />
        <DiscountOffersSection />
        <CategoriesSection
          title="Home and outdoor"
          categories={categories}
          img={CategoryImg}
        />
        <CategoriesSection
          title="Consumer electronics and gadgets"
          img={CategoryImg2}
          categories={categories}
        />
        <SliderHome />
        <SectionRecomendados />
      </div>
      <SubscriptionSection />
    </>
  );
};

export default Home;
