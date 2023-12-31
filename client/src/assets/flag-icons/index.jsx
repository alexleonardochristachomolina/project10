import React from 'react';
import FlagEnglish from './FlagEnglish.png';
import FlagGermany from './FlagGermany.png';

export const FlagEnglishIcon = () => (
  <img
    width="24px"
    height="17px"
    src={FlagEnglish}
    alt="Flag English"
    className="self-center mr-1"
  />
);

export const FlagGermanyIcon = () => {
  return (
    <img
      width="24px"
      height="17px"
      src={FlagGermany}
      alt="Falg Germany"
      className="self-center"
    />
  );
};
