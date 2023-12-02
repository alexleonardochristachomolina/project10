import logo from '../../assets/logo-symbol.svg';
import React, { useState } from 'react';
import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
  YouTubeIcon,
} from '../../assets/social-icons';
import { ExpandLessIcon } from '../../assets/control-icons';
import { FlagEnglishIcon } from '../../assets/flag-icons';

const Footer = () => {
  const [isMenuLanguageVisible, setMenuLanguageVisible] = useState(false);

  const toggleMenuLanguage = () => {
    setMenuLanguageVisible(!isMenuLanguageVisible);
  };
  return (
    <footer className="text-gray-600 body-font">
      <div className="container p-4 py-8 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <img src={logo} alt="logo" />
            <h1 className="font-bold text-2xl text-blue-400">Brand</h1>
          </a>
          <p className="mt-2 mb-2 text-sm text-gray-600">
            Best information about the company gies here but now lorem ipsum is
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
            <a className="text-gray-500" href="#">
              <FacebookIcon />
            </a>
            <a className="ml-3 text-gray-500" href="#">
              <TwitterIcon />
            </a>
            <a className="ml-3 text-gray-500" href="#">
              <LinkedInIcon />
            </a>
            <a className="ml-3 text-gray-500" href="#">
              <InstagramIcon />
            </a>
            <a className="ml-3 text-gray-500" href="#">
              <YouTubeIcon />
            </a>
          </span>
        </div>
        <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              About
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-gray-500 hover:text-gray-800" href="#">
                  About Us
                </a>
              </li>
              <li>
                <a className="text-gray-500 hover:text-gray-800" href="#">
                  Find store
                </a>
              </li>
              <li>
                <a className="text-gray-500 hover:text-gray-800" href="#">
                  Categories
                </a>
              </li>
              <li>
                <a className="text-gray-500 hover:text-gray-800" href="#">
                  Blogs
                </a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              Partnership
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-gray-500 hover:text-gray-800" href="#">
                  About us
                </a>
              </li>
              <li>
                <a className="text-gray-500 hover:text-gray-800" href="#">
                  Find store
                </a>
              </li>
              <li>
                <a className="text-gray-500 hover:text-gray-800" href="#">
                  Categories
                </a>
              </li>
              <li>
                <a className="text-gray-500 hover:text-gray-800" href="#">
                  Blogs
                </a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              Information
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-gray-500 hover:text-gray-800" href="#">
                  Help Center
                </a>
              </li>
              <li>
                <a className="text-gray-500 hover:text-gray-800" href="#">
                  Money Refund
                </a>
              </li>
              <li>
                <a className="text-gray-500 hover:text-gray-800" href="#">
                  Shipping
                </a>
              </li>
              <li>
                <a className="text-gray-500 hover:text-gray-800" href="#">
                  Contact us
                </a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              For users
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-gray-500 hover:text-gray-800" href="/login">
                  Login
                </a>
              </li>
              <li>
                <a
                  className="text-gray-500 hover:text-gray-800"
                  href="/register"
                >
                  Register
                </a>
              </li>
              <li>
                <a className="text-gray-500 hover:text-gray-800" href="#">
                  Settings
                </a>
              </li>
              <li>
                <a className="text-gray-500 hover:text-gray-800" href="/cart">
                  My Orders
                </a>
              </li>
            </nav>
          </div>
        </div>
      </div>
      <div className="bg-gray-100">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p className="text-gray-500 text-sm text-center sm:text-left">
            © 2023 Ecommerce.
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
            <FlagEnglishIcon />
            <span className="self-center">English</span>
            <div className="relative self-center">
              <button
                className="text-gray-800 rounded focus:outline-none"
                onClick={toggleMenuLanguage}
              >
                <ExpandLessIcon />
              </button>
              <div
                className={`${
                  isMenuLanguageVisible ? 'block' : 'hidden'
                } absolute bottom-8 right-0 mt-8 bg-white border border-gray-300 rounded shadow-md`}
              >
                <ul className="py-2 px-4">
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-gray-500 hover:text-gray-800"
                      onClick={toggleMenuLanguage}
                    >
                      English
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-gray-500 hover:text-gray-800"
                      onClick={toggleMenuLanguage}
                    >
                      Spanish
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-gray-500 hover:text-gray-800"
                      onClick={toggleMenuLanguage}
                    >
                      Portuguese
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
