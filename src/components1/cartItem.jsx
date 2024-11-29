import React, { useState } from "react";
import { useContext } from "react";
import { cartContext } from "../context/cartContext";

const CartItem = ({ item, onRemove, onQuantityChange }) => {
  const { id, name, image, price, quantity } = item;
  const { data,dispatch } = useContext(cartContext);
  const [state,set]=useState(data.cart.filter((item) => item.id === id).length);

  function remove(e) {
    e.preventDefault();
    dispatch((data) => {
      return { cart: data.cart.filter((item) => item.id != id), total: data.total - price * state, cartItems: data.cartItems - state };
    });
  }

  function changeQuantity(e,inc) {
    e.preventDefault();
    dispatch((data)=>{
        if(inc==-1 && state==1)
            return {cart:data.cart.filter((item)=>item.id!=id),total:data.total-price,cartItems:data.cartItems-1,shipping:data.shipping-10};
        else if(inc==1)
            return {cart:data.cart,total:data.total+price,cartItems:data.cartItems+1,shipping:data.shipping+10};
        else if(inc==-1)
            return {cart:data.cart,total:data.total-price,cartItems:data.cartItems-1,shipping:data.shipping-10};
    })
    set((x)=>x+inc);
  }

  return (
    <div className="mb-4 flex h-[8rem] items-center justify-between rounded-lg bg-white p-4 shadow-md">
      {/* Product Image */}
      <div className="w-1/6">
        <img src={image} alt={name} className="h-[5rem] w-[5rem] rounded-md" />
      </div>
      {/* Product Details */}
      <div className="ml-4 flex-1">
        <h2 className="text-lg font-semibold">{name}</h2>
        <p className="text-gray-500">${price.toFixed(2)}</p>
      </div>

      {/* Quantity Controls */}
      <div className="flex items-center">
        <button
          className="rounded-md bg-gray-200 px-2 py-1"
          onClick={(e) => changeQuantity(e,-1)}
          //   onClick={() => onQuantityChange(id, quantity - 1)}
        >
          -
        </button>
        <span className="px-4 text-lg">{state}</span>
        <button
          className="rounded-md bg-gray-200 px-2 py-1"
          onClick={(e) => changeQuantity(e,1)}
        >
          +
        </button>
      </div>

      {/* Remove Button */}
      <button
        className="ml-4 px-4 py-2 text-red-600 hover:text-red-800"
        onClick={remove}
      >
        Remove
      </button>
    </div>
  );
};

export default CartItem;

export const CartList = ({ products }) => {
  return (
    <div className="ml-10 flex flex-col gap-5">
      <div className="flex flex-col gap-6 md:grid-cols-2 lg:grid-cols-3">
        {products.map((p) => (
          <CartItem key={p.id} item={p} />
        ))}
      </div>
    </div>
  );
};
