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
    className={classNames(className)}
    {...props}
  >
    <path
      d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
      fill="currentColor"
    />
  </svg>
);

// eslint-disable-next-line react/prop-types
export const FavoriteBorderIcon = ({ className, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    className={classNames(className)}
    {...props}
  >
    <path
      d="M16.5 2.82495C14.76 2.82495 13.09 3.63495 12 4.91495C10.91 3.63495 9.24 2.82495 7.5 2.82495C4.42 2.82495 2 5.24495 2 8.32495C2 12.105 5.4 15.185 10.55 19.865L12 21.175L13.45 19.855C18.6 15.185 22 12.105 22 8.32495C22 5.24495 19.58 2.82495 16.5 2.82495ZM12.1 18.375L12 18.475L11.9 18.375C7.14 14.065 4 11.215 4 8.32495C4 6.32495 5.5 4.82495 7.5 4.82495C9.04 4.82495 10.54 5.81495 11.07 7.18495H12.94C13.46 5.81495 14.96 4.82495 16.5 4.82495C18.5 4.82495 20 6.32495 20 8.32495C20 11.215 16.86 14.065 12.1 18.375Z"
      fill="currentColor"
    />
  </svg>
);

// eslint-disable-next-line react/prop-types
export const StarBorderIcon = ({ className, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    className={classNames(className)}
    {...props}
  >
    <path
      d="M22 9.74L14.81 9.12L12 2.5L9.19 9.13L2 9.74L7.46 14.47L5.82 21.5L12 17.77L18.18 21.5L16.55 14.47L22 9.74ZM12 15.9L8.24 18.17L9.24 13.89L5.92 11.01L10.3 10.63L12 6.6L13.71 10.64L18.09 11.02L14.77 13.9L15.77 18.18L12 15.9Z"
      fill="currentColor"
    />
  </svg>
);

// eslint-disable-next-line react/prop-types
export const StarHalfIcon = ({ className, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    className={classNames(className)}
    {...props}
  >
    <path
      d="M22 9.74L14.81 9.12L12 2.5L9.19 9.13L2 9.74L7.46 14.47L5.82 21.5L12 17.77L18.18 21.5L16.55 14.47L22 9.74ZM12 15.9V6.6L13.71 10.64L18.09 11.02L14.77 13.9L15.77 18.18L12 15.9Z"
      fill="currentColor"
    />
  </svg>
);

// eslint-disable-next-line react/prop-types
export const StarIcon = ({ className, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    className={classNames(className)}
    {...props}
  >
    <path
      d="M12 17.77L18.18 21.5L16.54 14.47L22 9.74L14.81 9.13L12 2.5L9.19 9.13L2 9.74L7.46 14.47L5.82 21.5L12 17.77Z"
      fill="currentColor"
    />
  </svg>
);

// eslint-disable-next-line react/prop-types
export const ArrowBack = ({ className, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    className={classNames(className)}
    {...props}
  >
    <path
      d="M16 7H3.83L9.42 1.41L8 0L0 8L8 16L9.41 14.59L3.83 9H16V7Z"
      fill="currentColor"
    />
  </svg>
);

export const AddIcon = (props) => {
  return (
    <svg
      {...props}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z" fill="#8B96A5" />
    </svg>
  );
};

export const LessIcon = (props) => {
  return (
    <svg
      {...props}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M19 13H5V11H19V13Z" fill="#8B96A5" />
    </svg>
  );
};

export const MoreVertIcon = (props) => {
  return (
    <svg
      {...props}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 8C13.1 8 14 7.1 14 6C14 4.9 13.1 4 12 4C10.9 4 10 4.9 10 6C10 7.1 10.9 8 12 8ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10ZM12 16C10.9 16 10 16.9 10 18C10 19.1 10.9 20 12 20C13.1 20 14 19.1 14 18C14 16.9 13.1 16 12 16Z"
        fill="#8B96A5"
      />
    </svg>
  );
};
