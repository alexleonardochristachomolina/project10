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
    width="38"
    height="40"
    viewBox="0 0 38 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="Button/btn-group">
      <path
        id="&#226;&#151;&#188;&#239;&#184;&#143; Background"
        d="M0.5 6C0.5 2.96243 2.96243 0.5 6 0.5H37.5V39.5H6C2.96243 39.5 0.5 37.0376 0.5 34V6Z"
        fill="#EFF2F4"
        stroke="#DEE2E7"
      />
      <g id="Icon/control/gridview">
        <g id="Vector">
          <path d="M18 11H10V19H18V11Z" fill="#1C1C1C" />
          <path d="M18 21H10V29H18V21Z" fill="#1C1C1C" />
          <path d="M28 11H20V19H28V11Z" fill="#1C1C1C" />
          <path d="M28 21H20V29H28V21Z" fill="#1C1C1C" />
        </g>
      </g>
    </g>
  </svg>
);

export const ButtonIconList = () => (
  <svg
    width="38"
    height="40"
    viewBox="0 0 38 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="Button/btn-group">
      <path
        id="&#226;&#151;&#188;&#239;&#184;&#143; Background"
        d="M0.5 0.5H32C35.0376 0.5 37.5 2.96243 37.5 6V34C37.5 37.0376 35.0376 39.5 32 39.5H0.5V0.5Z"
        fill="white"
        stroke="#DEE2E7"
      />
      <g id="Icon/control/listview">
        <path
          id="Vector"
          d="M28 16H10V12H28V16ZM28 18H10V22H28V18ZM28 24H10V28H28V24Z"
          fill="#1C1C1C"
        />
      </g>
    </g>
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
