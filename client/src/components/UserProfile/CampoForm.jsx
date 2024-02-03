/* eslint-disable multiline-ternary */
import React from 'react';
import PropTypes from 'prop-types';
const Campo = ({
  label,
  placeholder,
  required,
  valor,
  actualizarValor,
  type,
}) => {
  const tipo = type || 'text';
  const manejarCambio = (event) => {
    actualizarValor(event.target.value);
  };

  return (
    <div className="w-full flex flex-col">
      <label className="mb-1" htmlFor={label}>
        {label}
      </label>
      {tipo === 'textarea' ? (
        <textarea
          className={
            'px-4 bg-gray-100 border border-gray-300 rounded-2xl h-[120px] resize-none pt-5'
          }
          id={label}
          name={label}
          placeholder={placeholder}
          required={required}
          value={valor}
          onChange={manejarCambio}
        />
      ) : (
        <input
          className={
            'px-4 bg-gray-100 border border-gray-300 rounded-2xl h-[60px]'
          }
          id={label}
          name={label}
          placeholder={placeholder}
          required={required}
          value={valor}
          onChange={manejarCambio}
          type={tipo}
        />
      )}
    </div>
  );
};

export default Campo;

Campo.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  valor: PropTypes.string,
  actualizarValor: PropTypes.func,
  type: PropTypes.string,
};
