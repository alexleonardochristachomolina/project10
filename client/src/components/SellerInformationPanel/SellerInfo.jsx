import React from 'react';
import { FlagGermanyIcon } from '../../assets/flag-icons';
import { VerifiedUserIcon, LanguageIcon } from '../../assets/seller-icons';

export const SellerInfo = () => {
  return (
    <section className="w-[280px] h-[264px] flex-auto px-4 py-5 md:border border-slate-200 rounded-md">
      <div className="flex flex-row gap-3">
        <div className="w-12 h-12">
          <img
            className="rounded w-full h-full object-cover object-center"
            // la imagen es de prueba, hay que cambiarla por la del perfil del vendedor.
            src="https://img.freepik.com/foto-gratis/cierrese-encima-retrato-muchacha-alegre-encanto-maquillaje-lindo-dientes-blancos-sonrientes-que-mira-feliz-camara-pie-sobre-fondo-azul_1258-70300.jpg?w=740&t=st=1703685148~exp=1703685748~hmac=2f151966d675517ee4523bbc2104b4380373d0fb8509568293ad1ea5527fcea0"
            alt="Profile image"
          />
        </div>
        <div className="font-normal text-base">
          <p>Supplier</p>
          <p>Guanjoi Trading LLC</p>
        </div>
      </div>
      <hr className="mt-5 mb-3 border-slate-200" />
      <div className="mb-4 text-gray-500 flex flex-col gap-2 justify-center">
        <span className="flex flex-row gap-5 items-center">
          {' '}
          <FlagGermanyIcon /> Germany, Berlin
        </span>
        <span className="flex flex-row gap-5 items-center">
          {' '}
          <VerifiedUserIcon /> Verified User
        </span>
        <span className="flex flex-row gap-5 items-center">
          {' '}
          <LanguageIcon />
          Worldwide shipping
        </span>
      </div>
      <button className="w-[248px] h-[40px] py-0 px-4 flex flex-col justify-center items-center gap-[10px] border-slate-200 border rounded-md  text-customBlue ">
        Seller s profile
      </button>
    </section>
  );
};
