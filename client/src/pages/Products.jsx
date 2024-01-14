import React from 'react';
import { ExpandLessIcon } from '../assets/control-icons';
import ProductList from '../components/Products/ProductList';
import { SidebarFilter } from '../components/SidebarFilter/index';
import { Pagination } from '../components/Pagination/index';
import { SelectBox } from '../components/SelectBox/index';
import SubscriptionSection from '../components/Home/SubscriptionSection';

const Products = () => {
  const categories = ['Home', 'Clothings', "Men's wear", 'Summer clothing'];
  return (
    <>
      <div className="container max-w-6xl mx-auto flex flex-col gap-5">
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
        <section className="flex gap-x-3">
          <SidebarFilter />

          <div className="flex-1">
            <ProductList />
          </div>
        </section>

        <div className="inline-flex gap-x-2 self-end">
          <SelectBox />
          <Pagination />
        </div>
      </div>
      <SubscriptionSection />
    </>
  );
};

export default Products;
