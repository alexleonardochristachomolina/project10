import React from 'react';
import { Link } from 'react-router-dom';
import {
  EmailIcon,
  FacebookIcon,
  GoogleIcon,
  PasswordIconOpen,
} from '../assets/icons-form';

const Login = () => {
  return (
    <div className="flex flex-col justify-center h-screen mx-4 bg-white md:px-20 rounded-3xl">
      <h1 className="mb-4 text-5xl font-bold text-center text-gray-400">
        Login
      </h1>
      <span className="mb-4 text-gray-400 ">
        You don’t have an account?{' '}
        <Link className="text-blue-500" to={'register'}>
          Sign Up
        </Link>
      </span>
      <form action="">
        <div className="relative flex items-center px-2 mb-4 bg-gray-100 border border-gray-300 rounded-2xl ">
          <input
            className="w-full py-3 pl-4 pr-8 placeholder-gray-400 outline-none bg-inherit rounded-2xl"
            type="email"
            placeholder="Email"
          />
          <EmailIcon />
        </div>
        <div className="relative flex items-center px-2 mb-4 bg-gray-100 border border-gray-300 rounded-2xl ">
          <input
            className="w-full py-3 pl-4 pr-8 placeholder-gray-400 outline-none bg-inherit rounded-2xl"
            type="password"
            placeholder="password"
          />
          <PasswordIconOpen />
        </div>
        <div className="flex flex-col items-center gap-y-4">
          <button
            type="submit"
            className="w-full px-12 py-3 font-bold text-white uppercase bg-blue-500 sm:w-auto rounded-2xl"
          >
            Login
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

export default Login;
