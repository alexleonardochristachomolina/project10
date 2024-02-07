import React from 'react';
import BannerDiscount from '../components/BannerDiscount';
import { SavedOrLatherSection } from '../components/SavedOrLatherSection/SavedOrLatherSection';
import CartSection from '../components/Cart/CartSection';
import { Services } from '../components/Services';
import Checkout from '../components/Cart/Checkout';
import useStore from '../utils/store';

const Cart = () => {
  const { cart } = useStore();

  return (
    <div className="container max-w-6xl mx-auto flex flex-col gap-5 my-5">
      {cart.length > 0 && (
        <p className="ml-5 xl:ml-0">My cart ({cart.length})</p>
      )}
      <div className="flex flex-col gap-x-5 md:flex-row bg-white">
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
