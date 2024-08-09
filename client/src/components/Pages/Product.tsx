// Created by Erikas Ramanauskas

import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

// Define the Product type
interface ProductProps {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

// Product component to display individual product details
const Product: React.FC<ProductProps> = ({
  id,
  name,
  description,
  price,
  imageUrl,
}) => {
  return (
    <div className="bg-white dark:bg-boxdark-2 dark:text-bodydark border border-gray-200 p-4 rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:cursor-pointer">
      <img src={imageUrl} alt={name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2 ">{name}</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">{description}</p>
        <p className="text-lg font-bold mb-4">${price.toFixed(2)}</p>
        <Link to={`/product/${id}`}>
          <Button className="bg-primary-light dark:bg-primary-dark text-white hover:bg-primary-light-hover dark:hover:bg-primary-dark-hover px-4 py-2 rounded">
            View Product
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Product;
