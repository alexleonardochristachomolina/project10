import React from 'react';
import BannerDiscount from '../components/BannerDiscount';
import { SellerInformationPanel } from '../components/SellerInformationPanel/SellerInformationPanel';
import { DescriptionSection } from '../components/DescriptionSection';

const ProductDetails = () => {
  return (
    <div className="container max-w-6xl mx-auto flex flex-col gap-5">
      <SellerInformationPanel />
      <DescriptionSection />
      <BannerDiscount />
    </div>
  );
};

export default ProductDetails;
