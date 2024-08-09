// Created by Ajithsan
// Edited by Erikas Ramanauskas

import React from 'react';
import Product from './Product';

// Define the Product type
interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

// Function to generate a random price with cents being either .49 or .99
const getRandomPrice = (min: number, max: number): number => {
  const dollars = Math.floor(Math.random() * (max - min + 1)) + min;
  const cents = Math.random() > 0.5 ? 0.49 : 0.99; // Randomly choose between 0.49 and 0.99
  return parseFloat((dollars + cents).toFixed(2));
};

// Generate product image URLs from picsum.photos
const getProductImageUrl = (index: number): string =>
  `https://picsum.photos/200?random=${index}`;

// Create an array of products with random prices and images
const products: Product[] = Array.from({ length: 30 }, (_, index) => ({
  id: index + 1,
  name: `Product ${index + 1}`,
  description: 'This is a brief description of the product.',
  price: getRandomPrice(10, 100), // Random price between $10 and $100 with .49 or .99 cents
  imageUrl: getProductImageUrl(index), // Generate a unique image URL
}));

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <main className="p-6">
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">
            Welcome to your marketplace!
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Edit your products here
          </p>
        </section>

        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Product
              key={product.id}
              id={product.id}
              name={product.name}
              description={product.description}
              price={product.price}
              imageUrl={product.imageUrl}
            />
          ))}
        </section>
      </main>

      <footer className="w-full p-6 mt-10 text-center text-gray-600 dark:text-gray-400">
        © 2024 Fashion Brand. All rights reserved.
      </footer>
    </div>
  );
};

export default HomePage;
