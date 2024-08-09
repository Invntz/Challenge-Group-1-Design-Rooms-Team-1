//Cara and Konstantinos
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../images/logo/InvntzLogo.png';
import HomeImage from '../../images/HomeImage/HomeImage.png';
import { Button } from '@/components/ui/button';

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex flex-col items-center justify-center">
      <header className="w-full p-6 flex justify-between items-center">
        <img src={Logo} alt="Fashion Brand Logo" className="h-14" />
        <nav className="flex space-between flex-1 max-w-[65%]">
          <div className="flex w-full justify-between items-center">
            <ul className="flex space-x-8 text-lg font-medium text-gray-800 dark:text-gray-200">
              <li>
                <Link to="/collections" className="hover:text-gray-500">
                  Collections
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-gray-500">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-gray-500">
                  Contact
                </Link>
              </li>
            </ul>
            <div>
              <ul className="flex space-x-8 text-lg font-medium text-gray-800 dark:text-gray-200">
                <button>
                  <Link to="/collections" className="hover:text-gray-500">
                    Sign In
                  </Link>
                </button>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  <Link to="/about" className="hover:text-gray-500">
                    Sign Up
                  </Link>
                </button>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <main className="w-full flex flex-col items-center text-center">
        <div className="relative w-full mx-auto">
          <img
            src={HomeImage}
            alt="Fabric Image Backround"
            className="w-full h-[70vh] object-cover shadow-lg"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white p-4">
           <p className="text-xl mb-6 max-w-2xl">
              The new way to create and sell products on-demand, double your
              earnings and be kind to the planet.
            </p>
            
          </div>
        </div>
      </main>

      <footer className="w-full p-6 mt-10 text-center text-gray-600 dark:text-gray-400">
        © 2024 Fashion Brand. All rights reserved.
      </footer>
    </div>
  );
};

export default LandingPage;
