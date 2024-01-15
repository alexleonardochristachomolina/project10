import React from 'react';
import { Carousel } from './Carousel';
import { ProductInfo } from './ProductInfo';
import { SellerInfo } from './SellerInfo';

export const SellerInformationPanel = () => {
  return (
    <div className="flex flex-row w-full justify-between rounded border border-slate-200 p-2 gap-3">
      <Carousel />
      <ProductInfo />
      <SellerInfo />
    </div>
  );
};
