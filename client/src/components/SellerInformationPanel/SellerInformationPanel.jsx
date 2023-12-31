import React from 'react';
import { Carousel } from './Carousel';
import { ProductInfo } from './ProductInfo';
import { SellerInfo } from './SellerInfo';

export const SellerInformationPanel = () => {
  return (
    <div className="flex flex-row w-[1180px] h-[580px] justify-between rounded border border-slate-200">
      <Carousel />
      <ProductInfo />
      <SellerInfo />
    </div>
  );
};
