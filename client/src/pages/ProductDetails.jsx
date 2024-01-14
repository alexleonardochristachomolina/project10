import React from 'react';
import BannerDiscount from '../components/BannerDiscount';
import { SellerInformationPanel } from '../components/SellerInformationPanel/SellerInformationPanel';
import { DescriptionSection } from '../components/DescriptionSection';
import { RelatedProducts } from '../components/RelatedProducts';
import FavoriteProducts from '../components/ProductsDetails/FavoriteProducts';

const ProductDetails = () => {
  return (
    <div className="container max-w-6xl mx-auto flex flex-col gap-5">
      <SellerInformationPanel />
      <DescriptionSection />
      <FavoriteProducts />
      <RelatedProducts />
      <BannerDiscount />
    </div>
  );
};

export default ProductDetails;
