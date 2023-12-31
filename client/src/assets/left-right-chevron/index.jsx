import React from 'react';
import classNames from 'classnames';

// eslint-disable-next-line react/prop-types
export const ChevronLeft = ({ className, ...props }) => (
  <svg
    {...props}
    className={classNames(className)}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15.705 7.41L14.295 6L8.29501 12L14.295 18L15.705 16.59L11.125 12L15.705 7.41Z"
      fill="currentColor"
    />
  </svg>
);

// eslint-disable-next-line react/prop-types
export const ChevronRight = ({ className, ...props }) => (
  <svg
    {...props}
    className={classNames(className)}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9.70501 6L8.29501 7.41L12.875 12L8.29501 16.59L9.70501 18L15.705 12L9.70501 6Z"
      fill="currentColor"
    />
  </svg>
);
