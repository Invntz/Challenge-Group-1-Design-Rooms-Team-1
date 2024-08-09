//Ajithan
import React from 'react';
import { Link } from 'react-router-dom';
import LogoDark from '../../images/logo/logo-dark.svg';
import Logo from '../../images/logo/logo.svg';
import { Button } from '@/components/ui/button';

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex flex-col items-center justify-center">
      <header className="w-full p-6 flex justify-between items-center">
        <img src={Logo} alt="Fashion Brand Logo" className="h-10" />
        <nav>
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
        </nav>
      </header>

      <main className="w-full flex flex-col items-center text-center">
        <div className="relative w-full max-w-6xl mx-auto">
          <img
            src="https://source.unsplash.com/1600x900/?fashion"
            alt="Fashion Showcase"
            className="w-full h-[70vh] object-cover rounded-lg shadow-lg"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white p-4 rounded-lg">
            <h1 className="text-5xl font-bold mb-4">
              Discover Your Unique Style
            </h1>
            <p className="text-xl mb-6 max-w-2xl">
              Explore the latest trends and timeless fashion pieces curated just
              for you. Elevate your wardrobe with our exclusive collections.
            </p>
            <Link to="/shop">
              <Button className="bg-primary text-white hover:bg-primary-dark px-8 py-3 rounded-full text-lg">
                Shop Now
              </Button>
            </Link>
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