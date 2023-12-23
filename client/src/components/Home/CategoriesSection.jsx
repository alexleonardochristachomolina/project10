import React from 'react';

export const CategoriesSection = () => {
  const categories = [
    {
      img: 'https://res.cloudinary.com/dlfwgaprv/image/upload/v1702084106/ejemplos/klipartz.com_pjzkxj.png',
      category: 'Soft Chairs',
      from: 19,
      id: 1,
    },
    {
      img: 'https://res.cloudinary.com/dlfwgaprv/image/upload/v1702084106/ejemplos/klipartz.com_pjzkxj.png',
      category: 'Sofa / chair',
      from: 19,
      id: 2,
    },
    {
      img: 'https://res.cloudinary.com/dlfwgaprv/image/upload/v1702084106/ejemplos/klipartz.com_pjzkxj.png',
      category: 'Kitechen dishes',
      from: 19,
      id: 3,
    },
    {
      img: 'https://res.cloudinary.com/dlfwgaprv/image/upload/v1702084106/ejemplos/klipartz.com_pjzkxj.png',
      category: 'Smart watches',
      from: 19,
      id: 4,
    },
    {
      img: 'https://res.cloudinary.com/dlfwgaprv/image/upload/v1702084106/ejemplos/klipartz.com_pjzkxj.png',
      category: 'Kitchen mixer',
      from: 100,
      id: 5,
    },
    {
      img: 'https://res.cloudinary.com/dlfwgaprv/image/upload/v1702084106/ejemplos/klipartz.com_pjzkxj.png',
      category: 'Blenders',
      from: 39,
      id: 6,
    },
    {
      img: 'https://res.cloudinary.com/dlfwgaprv/image/upload/v1702084106/ejemplos/klipartz.com_pjzkxj.png',
      category: 'Home appliance',
      from: 19,
      id: 7,
    },
    {
      img: 'https://res.cloudinary.com/dlfwgaprv/image/upload/v1702084106/ejemplos/klipartz.com_pjzkxj.png',
      category: 'Coffee maker',
      from: 10,
      id: 8,
    },
  ];

  return (
    <div className="bg-white flex justify-between h-64 rounded-lg border">
      <div className="flex w-64 flex-col relative">
        <img
          src="https://res.cloudinary.com/dlfwgaprv/image/upload/v1703338021/ejemplos/cat1_bo6w6s.png"
          alt=""
          className="absolute w-full h-full"
        />
        <div className="z-10 p-5">
          <h2 className="text-xl font-semibold w-24 mb-5">Home and outdoor</h2>
          <button className="font-medium p-4 rounded-md border-white bg-white hover:bg-slate-100">
            Source Now
          </button>
        </div>
      </div>
      <div className="grid grid-cols-4">
        {categories.map((category) => (
          <div
            key={category.id}
            className="bg-white px-[1.25rem] py-[0.5rem] border h-full flex gap-3 justify-between items-end hover:scale-105 transition-transform cursor-pointer"
          >
            <div className="h-full">
              <h3>{category.category}</h3>
              <span className="text-[#8B96A5] text-[13px]">
                From USD {category.from}
              </span>
            </div>
            <img
              src={category.img}
              alt={category.category}
              className="w-[82px] h-[82px]"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
