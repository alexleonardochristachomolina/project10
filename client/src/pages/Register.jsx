import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  NameIcon,
  EmailIcon,
  PasswordIconOpen,
  GoogleIcon,
  FacebookIcon,
} from '../assets/icons-form';

const Register = () => {
  const [emailRegister, setEmailRegister] = useState('');
  const [nombreRegister, setNombreRegister] = useState('');
  const [passwordRegister, setPasswordRegister] = useState('');
  const [error, setError] = useState(false);
  const [mensaje, setMensaje] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  const regexEmail = /^[^@]+@[^@]+.[a-zA-Z]{2,}$/;
  const regexPassword = /^(?=.*[0-9]+.*)(?=.*[a-zA-Z]+.*)[0-9a-zA-Z]{6,}$/;

  const visiblePassword = () => {
    setIsVisible(!isVisible);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if ([emailRegister, passwordRegister, nombreRegister].includes('')) {
      console.log('hay almenos uno ');
      setMensaje('Todos los campos son obligatorios');
      setError(true);
      return;
    }
    if (nombreRegister.length < 2 || nombreRegister.length > 30) {
      setError(true);
      setMensaje('El Nombre debe tener entre 2 y 30 caracteres.');
      console.log(nombreRegister.length);
      return;
    }
    if (!regexEmail.test(emailRegister)) {
      setError(true);
      setMensaje(
        'Ingresa un correo electrónico válido, por ejemplo, nombre@dominio.com'
      );
      return;
    }
    if (!regexPassword.test(passwordRegister)) {
      setError(true);
      setMensaje(
        'La contraseña debe contener al menos una letra, al menos un número y tener más de seis caracteres.'
      );
      return;
    }
    setError(false);

    // se reinicia el formulario

    setNombreRegister('');
    setEmailRegister('');
    setPasswordRegister('');
  };
  return (
    <div className="flex flex-col justify-center h-screen mx-4 bg-white md:px-20 rounded-3xl">
      <h1 className="mb-4 text-5xl font-bold text-center text-gray-400 ">
        Register
      </h1>
      <span className="mb-4 text-gray-400 ">
        Already A Member?{' '}
        <Link className="text-blue-500" to={'/auth'}>
          Log In
        </Link>
      </span>
      {error && (
        <div className="w-full px-6 py-2 mb-4 text-center text-white bg-red-500 rounded-2xl">
          <p>{mensaje}</p>
        </div>
      )}
      <form onSubmit={handleSubmit} noValidate>
        <div className="flex items-center px-2 mb-4 bg-gray-100 border border-gray-300 rounded-2xl">
          <input
            className="w-full py-3 pl-4 pr-8 placeholder-gray-400 outline-none bg-inherit rounded-2xl"
            type="text"
            placeholder="Nombre"
            value={nombreRegister}
            onChange={(e) => {
              setNombreRegister(e.target.value);
            }}
          />
          <NameIcon />
        </div>
        <div className="flex items-center px-2 mb-4 bg-gray-100 border border-gray-300 rounded-2xl">
          <input
            className="w-full py-3 pl-4 pr-8 placeholder-gray-400 outline-none bg-inherit rounded-2xl"
            type="email"
            placeholder="Email"
            value={emailRegister}
            onChange={(e) => {
              setEmailRegister(e.target.value.toLowerCase());
            }}
          />
          <EmailIcon />
        </div>
        <div className="flex items-center px-2 mb-4 bg-gray-100 border border-gray-300 rounded-2xl">
          <input
            className="w-full py-3 pl-4 pr-8 placeholder-gray-400 outline-none bg-inherit rounded-2xl"
            type={isVisible ? 'text' : 'password'}
            placeholder="password"
            autoComplete="off"
            value={passwordRegister}
            onChange={(e) => {
              setPasswordRegister(e.target.value);
            }}
          />
          <div onClick={visiblePassword}>
            <PasswordIconOpen />
          </div>
        </div>
        <div className="mb-4">
          <span className="text-gray-400 ">
            By registering, you agree to our{' '}
            <Link className="text-blue-500" to="#">
              Terms of Service
            </Link>{' '}
            and{' '}
            <Link className="text-blue-500" to="#">
              Privacy Policy
            </Link>
          </span>
        </div>
        {/* Botones */}
        <div className="flex flex-col items-center gap-y-4">
          <button
            type="submit"
            className="w-full px-12 py-3 font-bold text-white uppercase bg-blue-500 sm:w-auto rounded-2xl"
          >
            Register
          </button>
          <div className="flex items-center gap-1 px-4 py-3 bg-gray-600 md:gap-4 md:px-12 rounded-2xl">
            <GoogleIcon />
            <button className="font-bold text-white uppercase ">
              Iniciar sesion con Google
            </button>
          </div>
          <div className="flex items-center gap-1 px-4 py-3 bg-blue-500 md:gap-4 md:px-12 rounded-2xl">
            <FacebookIcon />
            <button className="font-bold text-white uppercase ">
              Iniciar sesion con Facebook
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
