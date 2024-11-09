import React,{useContext} from "react";
import { useParams } from "react-router-dom";
import { products } from "./products";
import { cartContext } from "../context/cartContext";
import { useNotify } from "reactjs-notify-toast";

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((product) => product.id === parseInt(id));
  const { data, dispatch } = useContext(cartContext);
  const {show}=useNotify();

  // if (!product) {
  //   return <div>Product not found</div>;
  // }

  function handle(e) {
    e.preventDefault();
    if(data.cart.find((item)=>item.id===product.id))
        return;
    dispatch((x) => {
      return {
        cart: x.cart?[...x.cart, product]:[product],
        total: x.total + product.price,
        cartItems: x.cartItems + 1,
        shipping: x.shipping + 10,
      };
    });
    show("Product added to cart", "success");
  }

  return (
    <div className="mx-auto max-w-4xl p-4">
      <div className="flex flex-col md:flex-row">
        <img
          className="h-96 w-full object-cover md:w-1/2"
          src={product.image}
          alt={product.name}
        />
        <div className="md:ml-8">
          <h1 className="mb-4 text-4xl font-bold">{product.name}</h1>
          <p className="mb-4 text-xl text-gray-600">${product.price}</p>
          <p className="mb-4 text-base text-gray-700">{product.description}</p>
          <button
            onClick={handle}
            className="rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
