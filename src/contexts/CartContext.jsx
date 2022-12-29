import { createContext } from "react";
import toast from 'react-hot-toast';
import useLocalStorageState from "use-local-storage-state";


export const CartContext = createContext([]);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useLocalStorageState("cart", { defaultValue: []});
  const addToCart = (productToAdd) => {
    if (!isInCart(productToAdd.id)) {
      setCart([...cart, productToAdd]);
      toast(`✅ Se agregó ${productToAdd.quantity} de "${productToAdd.name}"`);
    }
  };
  const isInCart = (id) => {
    return cart.some((product) => product.id === id);
  };
  const removeProduct = (id) => {
    const updateCart = cart.filter((product) => product.id !== id);
    setCart(updateCart);
    toast(`⛔ Se quitó el producto del carrito`);
  };
  const getTotalCart = () => {
    let totalCart = 0;
    cart.forEach((product) => {
      let subTotal = product.price * product.quantity;
      totalCart += subTotal;
    });
    return totalCart;
  };
  const getCartCounter = () => {
    let totalQuantity = 0;

    cart.forEach((product) => {
      totalQuantity += product.quantity;
    });
    return totalQuantity;
  };
  const clearCart = () => {
    setCart([])
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        isInCart,
        removeProduct,
        getCartCounter,
        getTotalCart,
        clearCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
