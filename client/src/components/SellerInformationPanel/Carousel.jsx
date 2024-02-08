import React from 'react';
import PropTypes from 'prop-types';

export const Carousel = ({ image }) => {
  return (
    <div className="w-[300px] md:w-[380px] flex-none">
      <img src={image} alt="Imagen del producto" />
    </div>
  );
};

Carousel.propTypes = {
  image: PropTypes.string,
};
