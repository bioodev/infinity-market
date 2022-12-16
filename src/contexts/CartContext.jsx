import { createContext, useState } from "react";

export const CartContext = createContext([]);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  console.log(cart);
  const addToCart = (productToAdd) => {
    if (!isInCart(productToAdd.id)) {
      setCart([...cart, productToAdd]);
    }
  };

  const isInCart = (id) => {
    return cart.some((product) => product.id === id);
  };
  return (
    <CartContext.Provider value={{ cart, addToCart, isInCart }}>
      {children}
    </CartContext.Provider>
  );
};
