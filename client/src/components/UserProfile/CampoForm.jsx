import React from 'react';
import PropTypes from 'prop-types';
const Campo = ({ label, placeholder, required, valor, onChange, type }) => {
  const tipo = type || 'text';

  return (
    <div className="w-full flex flex-col">
      <label className="mb-1" htmlFor={label}>
        {label}
      </label>
      <input
        className={
          'px-4 bg-gray-100 border border-gray-300 rounded-2xl h-[60px]'
        }
        id={label}
        name={label}
        placeholder={placeholder}
        required={required}
        value={valor}
        onChange={onChange}
        type={tipo}
      />
    </div>
  );
};

export default Campo;

Campo.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  valor: PropTypes.string,
  onChange: PropTypes.func,
  type: PropTypes.string,
};
