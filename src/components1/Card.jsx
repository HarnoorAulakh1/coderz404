import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/product/${product.id}`);
  };

  return (
    <div
      className="max-w-sm cursor-pointer overflow-hidden rounded bg-stone-100 p-4 shadow-lg border-4 border-amber-900	"
      onClick={handleClick}
    >
      <img
        className="h-48 w-full object-cover"
        src={product.image}
        alt={product.name}
      />
      <div className="px-6 py-4">
        <div className="mb-2 text-xl font-bold">{product.name}</div>
        <p className="text-base text-gray-700 p-1">
          <span className="font-bold text-lg text-black ">Rs.</span> 
          <span className="font-bold text-lg text-black">
          {product.price}
          </span>
        </p>
      </div>
      <div className="flex items-center justify-between px-6 pt-4 pb-2">
        <button className="rounded bg-amber-900 py-2 px-4 font-bold text-white hover:bg-amber-700">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
