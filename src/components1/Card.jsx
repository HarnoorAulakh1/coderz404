import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  

  const handleClick = () => {
    navigate(`/product/${product.id}`);
  };

  return (
    <div
      className="max-w-sm cursor-pointer overflow-hidden rounded bg-white p-4 shadow-lg"
      onClick={handleClick}
    >
      <img
        className="h-48 w-full object-cover"
        src={product.image}
        alt={product.name}
      />
      <div className="px-6 py-4">
        <div className="mb-2 text-xl font-bold">{product.name}</div>
        <p className="text-base text-gray-700">
          <span className="font-bold text-lg text-green-600">Rs.</span> {product.price}
        </p>
      </div>
      <div className="flex items-center justify-between px-6 pt-4 pb-2">
        <button className="rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
