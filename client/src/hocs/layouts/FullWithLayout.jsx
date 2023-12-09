import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SliderHome from '../../components/Slider';

export const FullWithLayout = () => {
  return (
    <div>
      <Header />
      <SliderHome />
      <Outlet />
      <Footer />
    </div>
  );
};
