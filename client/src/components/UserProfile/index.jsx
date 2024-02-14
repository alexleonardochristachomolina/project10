/* eslint-disable space-before-function-paren */
import React, { useState } from 'react';
import axios from 'axios';
import Campo from './CampoForm';

const Formulario = () => {
  const [formData, setFormData] = useState({
    brand: '',
    model: '',
    price: '',
    internalStorage: '',
    ramMemory: '',
    operatingSystem: '',
    screenSize: '',
    screenResolution: '',
    mainCamera: '',
    frontCamera: '',
    battery: '',
    connectivity: '',
    color: '',
    stock: '',
    launchDate: '',
    image: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        'http://ns1.dataindev.com:8080/cellphones',
        formData
      );
      if (response) {
        console.log('Datos enviados correctamente');
      } else {
        console.error('Error al enviar datos');
      }
    } catch (error) {
      console.error('Error de red:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-[500px] flex flex-col gap-2"
    >
      <Campo
        label="brand"
        placeholder="Ingresar marca"
        required
        valor={formData.brand}
        onChange={handleChange}
      />
      <Campo
        label="model"
        placeholder="Ingresar modelo"
        required
        valor={formData.model}
        onChange={handleChange}
      />
      <Campo
        label="price"
        placeholder="Ingresar precio"
        required
        valor={formData.price}
        onChange={handleChange}
        type="number"
      />
      <Campo
        label="internalStorage"
        placeholder="Ingresar internalStorage"
        required
        valor={formData.internalStorage}
        onChange={handleChange}
      />
      <Campo
        label="ramMemory"
        placeholder="Ingresar ramMemory"
        required
        valor={formData.ramMemory}
        onChange={handleChange}
      />
      <Campo
        label="operatingSystem"
        placeholder="Ingresar operatingSystem"
        required
        valor={formData.operatingSystem}
        onChange={handleChange}
      />
      <Campo
        label="screenSize"
        placeholder="Ingresar screenSize"
        required
        valor={formData.screenSize}
        onChange={handleChange}
      />
      <Campo
        label="screenResolution"
        placeholder="Ingresar screenResolution"
        required
        valor={formData.screenResolution}
        onChange={handleChange}
      />
      <Campo
        label="mainCamera"
        placeholder="Ingresar mainCamera"
        required
        valor={formData.mainCamera}
        onChange={handleChange}
      />
      <Campo
        label="frontCamera"
        placeholder="Ingresar frontCamera"
        required
        valor={formData.frontCamera}
        onChange={handleChange}
      />
      <Campo
        label="battery"
        placeholder="Ingresar battery"
        required
        valor={formData.battery}
        onChange={handleChange}
      />
      <Campo
        label="connectivity"
        placeholder="Ingresar connectivity"
        required
        valor={formData.connectivity}
        onChange={handleChange}
      />
      <Campo
        label="color"
        placeholder="Ingresar color"
        required
        valor={formData.color}
        onChange={handleChange}
      />
      <Campo
        label="stock"
        placeholder="Ingresar cantidad de stock"
        required
        valor={formData.stock}
        onChange={handleChange}
        type="number"
      />
      <Campo
        label="launchDate"
        placeholder="Ingresar launchDate"
        required
        valor={formData.launchDate}
        onChange={handleChange}
      />
      <Campo
        label="image"
        placeholder="Ingresar image"
        required
        valor={formData.image}
        onChange={handleChange}
      />
      <button className="w-full mt-6 px-12 py-3 font-bold text-white uppercase bg-blue-500 sm:w-auto rounded-2xl">
        Agregar
      </button>
    </form>
  );
};

export default Formulario;
