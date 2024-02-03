import React from 'react';
import FormAddProduct from '../components/UserProfile/index';

const AddProducts = () => {
  return (
    <section className="w-full min-h-screen py-8 flex flex-col justify-center items-center bg-white">
      <h1 className="mb-8 text-5xl font-bold text-center text-gray-400">
        Agregar Producto
      </h1>
      <FormAddProduct />
    </section>
  );
};

export default AddProducts;
