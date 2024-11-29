import React, { useContext } from "react";
import { Breadcrumb, CartItems } from "../components";
import { useCartContext } from "../context/cart_context";
import { Empty_cart } from "../components";
import { cartContext } from "../context/cartContext.jsx";
import  { CartList } from "../components1/cartItem.jsx";

const Cart = () => {
  //const { cart } = useCartContext();
  const { data } = useContext(cartContext);
  if (data.cart.length === 0) return <Empty_cart />
  console.log(data.cart);
  return (
    <>
      <Breadcrumb title="cart" />
      {/* <CartItems /> */}
      <div className="mt-10 flex flex-col gap-5 ">
        <CartList heading="Fashion" products={data.cart}/>
      </div>
    </>
  );
};

export default Cart;
