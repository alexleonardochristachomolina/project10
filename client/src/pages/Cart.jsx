import React from 'react';
import BannerDiscount from '../components/BannerDiscount';
import { SavedOrLatherSection } from '../components/SavedOrLatherSection/SavedOrLatherSection';
import CartSection from '../components/Cart/CartSection';
import { Services } from '../components/Services';
import Checkout from '../components/Cart/Checkout';

const Cart = () => {
  return (
    <div className="container max-w-6xl mx-auto flex flex-col gap-5 my-5">
      <p>My cart (3)</p>
      <div className="flex gap-5">
        <CartSection />
        <Checkout />
      </div>
      <Services />
      <SavedOrLatherSection />
      <BannerDiscount />
    </div>
  );
};

export default Cart;
