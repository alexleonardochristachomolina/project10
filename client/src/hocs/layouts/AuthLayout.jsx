import React from 'react';
import { Outlet } from 'react-router-dom';
import { ImageAuth } from '../../assets/auth-img';

const AuthLayout = () => {
  return (
    <div className="container h-screen m-auto lg:flex ">
      <div className="hidden lg:block">
        <ImageAuth />
      </div>
      <div className="lg:w-1/2  lg:mx-[-50px] ">
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
