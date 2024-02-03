import { AddIcon, LessIcon } from '../../assets/control-icons/index';
import React, { useState } from 'react';
import PropTypes from 'prop-types';

const ControlButton = ({ className }) => {
  const [num, setNum] = useState(0);

  const AddHandler = () => {
    setNum(num + 1);
  };

  const LessHandler = () => {
    num > 0 && setNum(num - 1);
  };

  const UpdateValueHandler = (e) => {
    const value = parseInt(e.target.value);
    e && value >= 0 && setNum(value);
  };

  return (
    <div className={`w-40 flex ${className}`}>
      <button
        onClick={AddHandler}
        type="button"
        data-input-counter-decrement="quantity-input"
        className="w-1/4 hover:bg-gray-100 border-2 rounded-s-lg h-11 focus:ring-gray-100 focus:ring-2 focus:outline-none"
      >
        <AddIcon className="m-auto" />
      </button>

      <input
        onChange={UpdateValueHandler}
        type="text"
        data-input-counter
        aria-describedby="helper-text-explanation"
        className="w-2/4 border-y-2 h-11 text-center text-gray-900 text-sm block py-2.5 z-10"
        placeholder={num}
        value={num}
        required
      />

      <button
        onClick={LessHandler}
        type="button"
        data-input-counter-increment="quantity-input"
        className="w-1/4 hover:bg-gray-200 border-2 rounded-e-lg h-11 focus:ring-gray-100 focus:ring-2 focus:outline-none"
      >
        <LessIcon className="m-auto" />
      </button>
    </div>
  );
};

ControlButton.propTypes = {
  className: PropTypes.string,
};

export default ControlButton;
