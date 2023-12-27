import React from 'react';
import BannerDiscount from '../components/BannerDiscount';
import { SavedOrLatherSection } from '../components/SavedOrLatherSection/SavedOrLatherSection';

const Cart = () => {
  return (
    <div>
      Cart
      <SavedOrLatherSection />
      <BannerDiscount />
    </div>
  );
};

export default Cart;
