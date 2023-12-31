import React from 'react';
import classNames from 'classnames';

export const ExpandLessIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 8.29492L6 14.2949L7.41 15.7049L12 11.1249L16.59 15.7049L18 14.2949L12 8.29492Z"
      fill="#1C1C1C"
    />
  </svg>
);

export const ExpandMoreIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16.59 8.295L12 12.875L7.41 8.295L6 9.705L12 15.705L18 9.705L16.59 8.295Z"
      fill="#1C1C1C"
    />
  </svg>
);

export const ButtonIconGroup = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
  >
    <path d="M8 0H0V8H8V0Z" fill="#1C1C1C" />
    <path d="M8 10H0V18H8V10Z" fill="#1C1C1C" />
    <path d="M18 0H10V8H18V0Z" fill="#1C1C1C" />
    <path d="M18 10H10V18H18V10Z" fill="#1C1C1C" />
  </svg>
);

export const ButtonIconList = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      d="M21 8H3V4H21V8ZM21 10H3V14H21V10ZM21 16H3V20H21V16Z"
      fill="#1C1C1C"
    />
  </svg>
);

// eslint-disable-next-line react/prop-types
export const CloseIcon = ({ className, ...props }) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={classNames('close-icon', className)}
    {...props}
  >
    <path
      d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
      fill="#8B96A5"
    />
  </svg>
);
