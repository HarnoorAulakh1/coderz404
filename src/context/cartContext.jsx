import React, { createContext, useState } from "react";

export const cartContext = createContext({
  data: { cart: [], total: 0, cartItems: 0, shipping: 0 },
  dispatch: () => {},
});

export default function CartProvider({ children }) {
  const [state, dispatch] = useState({
    cart: [],
    total: 0,
    cartItems: 0,
    shipping: 0,
  });

  return (
    <cartContext.Provider value={{ data: state, dispatch }}>
      {children}
    </cartContext.Provider>
  );
}
