import React from 'react';
import { useParams } from 'react-router-dom'
import { products } from './products';

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((product) => product.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="flex flex-col md:flex-row">
        <img
          className="w-full md:w-1/2 h-96 object-cover"
          src={product.image}
          alt={product.name}
        />
        <div className="md:ml-8">
          <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
          <p className="text-gray-600 text-xl mb-4">${product.price}</p>
          <p className="text-gray-700 text-base mb-4">{product.description}</p>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
