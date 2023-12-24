import React, { useState } from 'react';
import PropTypes from 'prop-types';

const FilterBar = ({ onChange, value = 0 }) => {
  const [sliderValue, setSliderValue] = useState(value);

  const handleSliderChangeValue = (event) => {
    setSliderValue(event.target.value);
    onChange(event);
  };

  return (
    <input
      className="h-[10px] mb-3 mt-2 appearance-none rounded-[5px] w-full cursor-pointer bg-gray-200"
      type="range"
      min="0"
      max="1500"
      step="50"
      value={sliderValue}
      onChange={handleSliderChangeValue}
    />
  );
};

FilterBar.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.number,
};

export default FilterBar;
