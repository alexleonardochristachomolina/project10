import { useState } from 'react';
import { FilterBar } from '../PriceRange/index.jsx';
import { Categories } from './Categories.jsx';
import { ExpandLessIcon } from '../../assets/control-icons/index.jsx';

export const SidebarFilter = ({ min = 0, max = 1500 }) => {
  const [minValue, setMinValue] = useState(min);
  const [maxValue, setMaxValue] = useState(max);

  const handleSliderChangeMax = (event) => {
    setMaxValue(event.target.value);
  };

  const handleSliderChangeMin = (event) => {
    setMinValue(event.target.value);
  };

  return (
    <>
      <div className="flex flex-col w-60">
        <details open className="flex flex-col border-t-2 border-t-gray-300">
          <summary className="flex justify-between font-semibold text-base cursor-pointer pt-3 pb-3">
            Category
            <ExpandLessIcon></ExpandLessIcon>
          </summary>

          <Categories></Categories>
        </details>

        <details open className="flex flex-col border-t-2 border-t-gray-300">
          <summary className="flex justify-between font-semibold text-base cursor-pointer pt-3 pb-3">
            Price range
            <ExpandLessIcon></ExpandLessIcon>
          </summary>

          <p className="font-medium text-sm text-gray-600">
            Min Price: ${minValue}
          </p>
          <FilterBar
            onChange={handleSliderChangeMin}
            value={minValue}
          ></FilterBar>

          <p className="font-medium text-sm text-gray-600">
            Max Price: ${maxValue}
          </p>
          <FilterBar
            onChange={handleSliderChangeMax}
            value={maxValue}
          ></FilterBar>
        </details>
      </div>
    </>
  );
};
