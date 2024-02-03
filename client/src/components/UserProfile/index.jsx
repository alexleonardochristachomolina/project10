import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Campo from './CampoForm';
// import ListaOpciones from "./ListOptions";
// import Modal from "../Modal";
// La lista de opciones sería un select a futuro si se necesitara
// El modal también podría aplicarse para dar aviso de que un producto se agrego o se edito correctamente
// Los datos entrar como parametro porque este mismo formulario puede usarse para editar un producto
const Formulario = ({ datos }) => {
  // const { agregarVideo, actualizarVideo } = useContext(MainContext);
  const [brand, updateBrand] = useState(datos ? datos.brand : '');
  const [model, updateModel] = useState(datos ? datos.model : '');
  const [price, updatePrice] = useState(datos ? datos.price : '');
  const [stock, updateStock] = useState(datos ? datos.stock : '');
  // const [formacion, updateFormacion] = useState(datos ? datos.formacion : '');
  // const [openModal, setOpenModal] = useState(false);

  const handleAgregar = (evento) => {
    evento.preventDefault();
    console.log('producto agregado');
    // let datosAEnviar = {
    //   id: uuidv4(),
    //   brand,
    //   stock,
    //   formacion,
    //   model,
    //   price,
    // };

    // agregarVideo(datosAEnviar);
    // setOpenModal(true);
  };

  const handleEditar = (evento) => {
    evento.preventDefault();

    // let datosAEditar = {
    //   id: datos.id,
    //   brand,
    //   stock,
    //   formacion,
    //   model,
    //   price,
    // };

    // actualizarVideo(datosAEditar);
    // setOpenModal(true);
  };

  return (
    <form
      onSubmit={datos ? handleEditar : handleAgregar}
      className="w-full max-w-[500px] flex flex-col gap-2"
    >
      <Campo
        label="Brand"
        placeholder="Ingresar marca"
        required
        valor={brand}
        actualizarValor={updateBrand}
      />
      <Campo
        label="Model"
        placeholder="Ingresar modelo"
        required
        valor={model}
        actualizarValor={updateModel}
      />
      <Campo
        label="Price"
        placeholder="Ingresar precio"
        required
        valor={price}
        actualizarValor={updatePrice}
        type="number"
      />
      <Campo
        label="Stock"
        placeholder="Ingresar cantidad de stock"
        required
        valor={stock}
        actualizarValor={updateStock}
        type="number"
      />
      {/* <ListaOpciones
          valor={formacion}
          actualizarFormacion={updateFormacion}
        /> */}
      <button className="w-full mt-6 px-12 py-3 font-bold text-white uppercase bg-blue-500 sm:w-auto rounded-2xl">
        {datos ? 'Editar' : 'Agregar'}
      </button>
    </form>
  );
};

export default Formulario;

Formulario.propTypes = {
  datos: PropTypes.object,
};
