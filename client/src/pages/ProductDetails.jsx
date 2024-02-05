import React, { useEffect } from 'react';
import BannerDiscount from '../components/BannerDiscount';
import { SellerInformationPanel } from '../components/SellerInformationPanel/SellerInformationPanel';
import { DescriptionSection } from '../components/DescriptionSection';
import { RelatedProducts } from '../components/RelatedProducts';
import FavoriteProducts from '../components/ProductsDetails/FavoriteProducts';

import { useParams } from 'react-router-dom';
import useStore from '../utils/store';

const ProductDetails = () => {
  const { id } = useParams();
  const { productId, getProductById, products, fetchProducts } = useStore();

  useEffect(() => {
    getProductDetails(id);
  }, [id]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  // eslint-disable-next-line space-before-function-paren
  const getProductDetails = async (id) => {
    await getProductById(id);
  };

  return (
    <div className="container max-w-6xl mx-auto flex flex-col gap-5">
      <SellerInformationPanel productId={productId} />
      <DescriptionSection />
      <FavoriteProducts products={products} />
      <RelatedProducts products={products} />
      <BannerDiscount />
    </div>
  );
};

export default ProductDetails;
