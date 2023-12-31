import React, { useState } from 'react';

export const Carousel = () => {
  const stackImages = [
    'https://m.media-amazon.com/images/I/71aTjTMFiJL._AC_SL1500_.jpg',
    'https://m.media-amazon.com/images/I/81HzhKILmkL._AC_SL1500_.jpg',
    'https://m.media-amazon.com/images/I/81cRIHRkzCL._AC_SL1500_.jpg',
    'https://m.media-amazon.com/images/I/816oWLrLIEL._AC_SL1500_.jpg',
    'https://m.media-amazon.com/images/I/71hrG7gqHzL._AC_SL1500_.jpg',
    'https://m.media-amazon.com/images/I/81eKg-3vWEL._AC_SL1500_.jpg',
  ];
  const [selectedImage, setSelectedImage] = useState(stackImages[0]);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  return (
    <section className="w-[380px] h-[90%] flex flex-col items-center justify-center gap-5">
      <div className="w-[380px] h-[380px] flex justify-center items-center border-slate-200 border rounded-md">
        <img
          className="w-[345px] h-[345px]"
          src={selectedImage}
          alt="Imagen del producto"
        />
      </div>
      <div className="w-[380px] h-14 mx-1 flex flex-row justify-between ">
        {stackImages.map((image, index) => {
          return (
            <div
              key={index}
              onClick={() => handleImageClick(image)}
              className="w-14 h-14 flex items-center justify-center border-slate-200 border rounded-md cursor-pointer"
            >
              {' '}
              <img
                className="w-12 h-12"
                src={image}
                alt="Información del producto"
              />{' '}
            </div>
          );
        })}
      </div>
    </section>
  );
};
