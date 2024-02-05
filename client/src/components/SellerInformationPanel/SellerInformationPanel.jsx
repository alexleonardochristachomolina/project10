import React from 'react';
import PropTypes from 'prop-types';
import { Carousel } from './Carousel';
import { ProductInfo } from './ProductInfo';
import { SellerInfo } from './SellerInfo';

export const SellerInformationPanel = ({ productId }) => {
  return (
    <div className="flex flex-row w-full justify-between rounded border border-slate-200 p-2 gap-3">
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
