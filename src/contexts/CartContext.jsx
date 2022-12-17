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

  const removeProduct = (id) => {
    const updateCart = cart.filter((product) => product.id !== id);
    setCart(updateCart);
  };

  const getCartCounter = () => {
    let totalQuantity = 0;

    cart.forEach((product) => {
      totalQuantity += product.quantity;
    });
    return totalQuantity;
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, isInCart, removeProduct, getCartCounter }}
    >
      {children}
    </CartContext.Provider>
  );
};
