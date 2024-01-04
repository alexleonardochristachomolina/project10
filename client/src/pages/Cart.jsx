import React from 'react';
import BannerDiscount from '../components/BannerDiscount';
import { SavedOrLatherSection } from '../components/SavedOrLatherSection/SavedOrLatherSection';
import CartSection from '../components/Cart/CartSection';
import { Services } from '../components/Services';

const Cart = () => {
  return (
    <div className="container max-w-6xl mx-auto flex flex-col gap-5 my-5">
      <p>My cart (3)</p>
      <div>
        <CartSection />
      </div>
      <Services />
      <SavedOrLatherSection />
      <BannerDiscount />
    </div>
  );
};

export default Cart;
