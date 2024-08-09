import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../images/logo/logo.svg'; // Adjust paths as needed
import { Button } from '@/components/ui/button';

const products = Array.from({ length: 30 }, (_, index) => ({
  id: index + 1,
  name: `Product ${index + 1}`,
  description: 'This is a brief description of the product.',
  price: (index + 1) * 10,
  imageUrl: `../../images/logo/logo.svg`,
}));

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      

      <main className="p-6">
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Welcome to Our Store</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Discover the latest products and deals. Shop now to find something you'll love!
          </p>
        </section>

        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map(product => (
            <div key={product.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{product.description}</p>
                <p className="text-lg font-bold mb-4">${product.price.toFixed(2)}</p>
                <Link to={`/product/${product.id}`}>
                  <Button className="bg-primary text-white hover:bg-primary-dark px-4 py-2 rounded">
                    View Product
                  </Button>
                </Link>
              </div>
            </div>
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
