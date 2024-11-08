import React from 'react';
import ProductCard from './Card';

const products = [
  {
    id: 1,
    name: 'Wireless Headphones',
    price: 99.99,
    image: 'https://example.com/images/headphones.jpg',
  },
  {
    id: 2,
    name: 'Smartphone',
    price: 699.99,
    image: 'https://example.com/images/smartphone.jpg',
  },
];

const ProductList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
