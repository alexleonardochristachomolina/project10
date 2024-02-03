import React from 'react';
import { ArrowBack } from '../../assets/control-icons';
import CartCardProduct from './CartCardProduct';

const CartSection = () => {
  const cart = [
    {
      img: 'https://s3-alpha-sig.figma.com/img/66ac/8758/b171e503e38e7b8c0a5fa03996d5d467?Expires=1705276800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SaAaObhUh2At6TfOpeasW1pkardYsBTguHOaaeKSCaGRYZX99O32blCxJoTUo3EsnL~ko20Y17TpxrEjCVzIYTaCvt9pMVjR4LJpjGPwWGDwi~o74guU971akfwn4Y2~GpoHo3lA4GKUO7MPDW1BvgUbgIgJFADMAO8whkuksBBrRfwAhdRXtqeWhKgco~Ba~J7Kan7yTI-Qex4K2ilUIQwUW5A-8VV8HxptcgRvmQht6ImIoTuxtu4T2g2wLSf40NOTTK0Yfu2oeWzXASK-iKNGS-bxL1UkpQr6TSh~Nj-8B2qvLdMxWc2jFNkfHRmFi7gDk3kGFGpBx1o~0pgbYw__',
      name: 'T-shirts with multiple colors, for men and lady',
      size: 'medium',
      color: 'blue',
      material: 'Plastic',
      seller: 'Artel Market',
      price: 78.99,
      stock: 10,
    },
    {
      img: 'https://s3-alpha-sig.figma.com/img/deea/14d7/8e68b15c28eb29234224b8b2f71d5eb5?Expires=1705276800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WaG2xvl4IyX2htmkDbjACNGlqUZjxDoH4vvoJv60XVubGBGsSIIp7eeI8K66ZZ4ccQpcO5SXPEq8qYU4P~OrhBSwRYAMPoc55XcTom2n8b~K9UuwrArpqmutsuheUFtTIGt1UySO-e7QEQbgWPZiKcYi9dy~BQjnZEqUoG6zvPONx1uhK1ViI8344SaVffwzDoxbXVTAE3G4w5bQ5VqofofmrliRO2IJznkEhBDBy5mUmtS9zgw7rPpszUyQXr5E4RWlUoBS9ja8bpD4WTKnyyWUv3ffkHKeJnwAkRx0Pd7OKF0B5kB4~vM5SgideXTeIQdKTuEzT-qmH1UmfdJlpg__',
      name: 'T-shirts with multiple colors, for men and lady',
      size: 'medium',
      color: 'blue',
      material: 'Plastic',
      seller: 'Best factory LLC',
      price: 39.0,
      stock: 10,
    },
    {
      img: 'https://s3-alpha-sig.figma.com/img/e760/9aa3/afe3483e736054358d53f2f8797b4546?Expires=1705276800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PgpYhfOPA4LAvBVqnuEgU9uoek2z~PNAzJzp1AsrVTZgNg62uMZlb0GcsZm8qjZ5rYF4wBd3hp2RQaRhunC8CqqP-qxbukuVWI9zDf4qVRCZBTMSzxHJT76mlnkaXLy2rHqoOJJ61B3sacM6xQfAl7W~ytUZ5wdMdCzcd545F9qPShhn23245j-KewXxKwYadNSmqCpsLRWlmpYI-GsuPdgmVb7F0XS5Bl7fzDVrCDuBr~YKBU0x5OEPgM-e6baHOoIUWUbxukc-6ohQ2bVKj8MEkSaGE52LvYi1efjbjC1npl-AX7AFJhb6wENV2vbF5x4z41bXK5BL5B0mX5mjSg__',
      name: 'T-shirts with multiple colors, for men and lady',
      size: 'medium',
      color: 'blue',
      material: 'Plastic',
      seller: 'Artel Market',
      price: 170.5,
      stock: 10,
    },
  ];
  return (
    <div className="border xl:rounded-md pb-5 flex-grow w-full">
      {cart?.map((prod, i) => (
        <CartCardProduct key={i} prod={prod} />
      ))}

      <div className="justify-between m-5 mb-0 hidden md:flex">
        <button className="bg-[#0067FF] flex items-center gap-3 text-white rounded-md hover:bg-white hover:text-[#0067FF] border p-2">
          <ArrowBack />
          Back to shop
        </button>
        <button className="border rounded-md text-[#0067FF] hover:bg-[#0067FF] hover:text-white p-2">
          Remove all
        </button>
      </div>
    </div>
  );
};

export default CartSection;
