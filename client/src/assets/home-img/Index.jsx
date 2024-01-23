import React from 'react';
import PropTypes from 'prop-types';

export const ArrowForward = ({ className }) => {
  return (
    <svg
      className={className}
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.9998 3.66666L9.70734 4.95916L14.8223 10.0833H3.6665V11.9167H14.8223L9.70734 17.0408L10.9998 18.3333L18.3332 11L10.9998 3.66666Z"
        fill="currentColor"
      />
    </svg>
  );
};

ArrowForward.propTypes = {
  className: PropTypes.string,
};
