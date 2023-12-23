import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import { FullWithLayout } from '../hocs/layouts/FullWithLayout';
import AuthLayout from '../hocs/layouts/AuthLayout';

import Login from '../pages/Login';
import Register from '../pages/Register';
const Home = lazy(() => import('../pages/Home'));
const Products = lazy(() => import('../pages/Products'));
const ProductDetails = lazy(() => import('../pages/ProductDetails'));
const Cart = lazy(() => import('../pages/Cart'));
const NotFound = lazy(() => import('../pages/NotFound'));

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<FullWithLayout />}>
        <Route index element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="products/:id" element={<ProductDetails />} />
        <Route path="cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
      </Route>
      <Route path="/auth" element={<AuthLayout />}>
        <Route index element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>
    </Routes>
  );
};
