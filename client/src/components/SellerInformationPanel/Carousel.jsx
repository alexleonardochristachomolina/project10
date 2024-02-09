import React from 'react';
import PropTypes from 'prop-types';

export const Carousel = ({ image }) => {
  return (
    <div className="flex-none order-1 flex justify-center sm:block">
      <img src={image} alt="Imagen del producto" />
    </div>
  );
};

Carousel.propTypes = {
  image: PropTypes.string,
};
