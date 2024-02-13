import React, { useState } from 'react';
import { ExpandLessIcon } from '../assets/control-icons';
import ProductList from '../components/Products/ProductList';
import { SidebarFilter } from '../components/SidebarFilter/index';
// import { Pagination } from '../components/Pagination/index';
// import { SelectBox } from '../components/SelectBox/index';
import SubscriptionSection from '../components/Home/SubscriptionSection';

const Products = () => {
  const categories = ['Home', 'Clothings', "Men's wear", 'Summer clothing'];

  const [min, setMin] = useState(0);
  const [max, setMax] = useState(1500);
  return (
    <>
      <div className="container max-w-6xl mx-auto flex flex-col gap-5">
        <div className="hidden sm:flex text-[#8B96A5] my-5">
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
        <section className="flex gap-x-3">
          <SidebarFilter setMax={setMax} setMin={setMin} />

          <div className="flex-1 w-fit max-w-full">
            <ProductList setMax={setMax} setMin={setMin} max={max} min={min} />
          </div>
        </section>
      </div>
      <SubscriptionSection />
    </>
  );
};

export default Products;
