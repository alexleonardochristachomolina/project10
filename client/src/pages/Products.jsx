import React from 'react';
import { ExpandLessIcon } from '../assets/control-icons';
import ProductList from '../components/Products/ProductList';

const Products = () => {
  const categories = ['Home', 'Clothings', "Men's wear", 'Summer clothing'];
  return (
    <div className="container max-w-7xl mx-auto flex flex-col gap-5">
      <div className="flex text-[#8B96A5] my-5">
        {categories.map((cat, i) => (
          <div key={i} className="flex">
            <span>{cat}</span>
            {i < categories.length - 1 && (
              <span className="transform rotate-90">
                <ExpandLessIcon />
              </span>
            )}
          </div>
        ))}
      </div>
      <div>
        <ProductList />
      </div>
    </div>
  );
};

export default Products;
