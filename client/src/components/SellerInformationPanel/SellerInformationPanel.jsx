import React from 'react';
import PropTypes from 'prop-types';
import { Carousel } from './Carousel';
import { ProductInfo } from './ProductInfo';
import { SellerInfo } from './SellerInfo';

export const SellerInformationPanel = ({ productId }) => {
  return (
    <div className="max-full p-2 flex flex-col min-[571px]:flex-row justify-between flex-wrap gap-3 border border-slate-200 rounded">
      <Carousel image={productId.image} />
      <ProductInfo info={productId} />
      <SellerInfo />
    </div>
  );
};

SellerInformationPanel.propTypes = {
  productId: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.arrayOf(PropTypes.any),
  ]).isRequired,
};
