import React from 'react';
import PropTypes from 'prop-types';

function VerticalMenu({
  itemsMenu,
  isVerticalMenuVisible,
  toggleVerticalMenu,
}) {
  return (
    <div
      className={`${
        isVerticalMenuVisible ? 'block' : 'hidden'
      } relative bg-white border border-gray-300 rounded shadow-md z-20 sm:absolute`}
    >
      <ul className="py-2 px-2">
        <li>
          {itemsMenu.map((item, index) => {
            return (
              <a
                key={index}
                href={item.href}
                className="block px-4 py-2 text-gray-500 hover:text-gray-800 hover:bg-blue-200"
                onClick={toggleVerticalMenu}
              >
                {item.category}
              </a>
            );
          })}
        </li>
      </ul>
    </div>
  );
}
VerticalMenu.propTypes = {
  itemsMenu: PropTypes.array.isRequired,
  isVerticalMenuVisible: PropTypes.bool.isRequired,
  toggleVerticalMenu: PropTypes.func.isRequired,
};

export default VerticalMenu;
