//Cara and Konstantinos
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../images/logo/InvntzLogo.png';
import HomeImage from '../../images/HomeImage/HomeImage.png';
// import { Button } from '@/components/ui/button';
import SignupPopup from '@/components/Popups/SignupPopup';
import LoginPopup from '@/components/Popups/LoginPopup';
import Marquee from 'react-fast-marquee';
import brand1 from '@/images/brand/stellamccartney.jpg';
import brand2 from '@/images/brand/patagonia.png';
import brand3 from '@/images/brand/vivwestwood.jpg';
import brand4 from '@/images/brand/pangaia.png';
import brand5 from '@/images/brand/girlfriendcollectivelogo.png';

import card1 from '@/images/HomeImage/image1.png';

const brands = [
  {
    name: 'stellamccartney',
    img: brand1,
  },
  {
    name: 'patagonia',
    img: brand2,
  },
  {
    name: 'vivwestwood',
    img: brand3,
  },
  {
    name: 'pangaia',
    img: brand4,
  },
  {
    name: 'girlfriendcollectivelogo',
    img: brand5,
  },
];

type cardProps = {
  img: string;
  desc: string;
  reverse: boolean;
};

const Card = ({ img, desc, reverse }: cardProps) => (
  <section
    className={`${
      reverse ? 'bg-graydark/10' : 'bg-white'
    } w-full p-5 grid h-auto grid-cols-2`}
  >
    <div
      className="w-full aspect-[1/0.5] rounded-lg bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: `url("${img}")` }}
    ></div>
    <p className="px-6 py-5 flex items-center text-lg">{desc}</p>
  </section>
);

const LandingPage: React.FC = () => {
  const [signup, setSignup] = useState(false);
  const [login, setLogin] = useState(false);

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
                <button onClick={() => setLogin(true)}>Sign In</button>
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  onClick={() => setSignup(true)}
                >
                  Sign Up
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
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-start text-white py-4 px-8">
            <p className="text-xl mb-6 max-w-xl text-left text-[35px] leading-10">
              The new way to create and sell products on-demand, double your
              earnings and be kind to the planet.
            </p>
          </div>
        </div>
      </main>

      <section className="my-5 w-full">
        <Marquee>
          {brands.map((brand) => (
            <div className="mx-5 max-w-[100px] w-full">
              <img src={brand.img} alt={brand.name} />
            </div>
          ))}
        </Marquee>
      </section>

      <Card
        img={card1}
        desc="By using renewable, biodegradable materials, the service helps reduce the fashion industry's reliance on petrochemicals and animal products, which are major sources of pollution and environmental degradation."
        reverse={false}
      />

      <footer className="w-full p-6 mt-10 text-center text-gray-600 dark:text-gray-400">
        © 2024 Fashion Brand. All rights reserved.
      </footer>
      <LoginPopup
        isOpen={login}
        handleClose={() => setLogin(!login)}
        setSignup={setSignup}
      ></LoginPopup>
      <SignupPopup
        isOpen={signup}
        handleClose={() => setSignup(!signup)}
        setLogin={setLogin}
      ></SignupPopup>
    </div>
  );
};

export default LandingPage;
