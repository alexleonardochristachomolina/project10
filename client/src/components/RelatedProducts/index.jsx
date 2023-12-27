import React from 'react';

export const RelatedProducts = () => {
  const products = Array(6);

  //TODO: Agregar src y href
  products.fill({
    name: 'Xiaomi Redmi 8 Original',
    price: '$32.00-$40.00',
    src: null,
    href: null,
  });
  //TODO: Agregar el resto de productos con su respectiva informacion

  return (
    <>
      <div className="w-fit p-[1.625rem_1.375rem_2rem] rounded-md border border-gray-300">
        <h4 className="font-semibold text-xl mb-4">Related products</h4>

        <div className="flex gap-x-5 overflow-x-auto">
          {products.map((product, index) => (
            <div
              key={index}
              className="flex flex-col gap-y-[.875rem] min-w-fit"
            >
              <picture className="bg-[#EEE] p-5 rounded-md">
                <img
                  src={
                    product.src ||
                    'https://m.media-amazon.com/images/I/61h1JmIy4UL._AC_SX679_.jpg'
                  }
                  alt={product.name || products[0].name}
                  className="h-[10.75rem] w-[10.75rem] object-contain brightness-110 mix-blend-multiply"
                />
              </picture>

              <div className="flex flex-col gap-y-2 w-4/5">
                <a href={product.href || '#'} className="text-[#505050]">
                  {product.name || products[0].name}
                </a>
                <p className="text-[#8B96A5]">
                  {product.price || products[0].price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
