/* eslint-disable multiline-ternary */
import React from 'react';
import { ArrowBack } from '../../assets/control-icons';
import CartCardProduct from './CartCardProduct';
import useStore from '../../utils/store';
import { Link } from 'react-router-dom';

const CartSection = () => {
  const { cart, removeFromCart, clearCart } = useStore();
  // console.log(cart);
  // Filtrar elementos duplicados por su ID
  const uniqueCart = cart.filter(
    (product, index, self) =>
      index === self.findIndex((p) => p.id === product.id)
  );
  return (
    <div className="border xl:rounded-md pb-5 flex-grow w-full">
      {cart.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        <ul>
          {uniqueCart?.map((product) => (
            <CartCardProduct
              key={product.id}
              prod={product}
              removeFromCart={removeFromCart}
            />
          ))}
        </ul>
      )}
      <div className="justify-between m-5 mb-0 hidden md:flex">
        <Link
          to="/products"
          className="bg-[#0067FF] flex items-center gap-3 text-white rounded-md hover:bg-white hover:text-[#0067FF] border p-2"
        >
          <ArrowBack />
          Back to shop
        </Link>
        <button
          onClick={clearCart}
          className="border rounded-md text-[#0067FF] hover:bg-[#0067FF] hover:text-white p-2"
        >
          Remove all
        </button>
      </div>
    </div>
  );
};

export default CartSection;
