import { createContext, useState, useContext } from "react";
import useLocalStorageState from "use-local-storage-state";
import { toast } from "react-hot-toast";
import { addDoc, collection, updateDoc, doc } from "firebase/firestore";
import { CartContext } from "../contexts/CartContext";
import { db } from "../services/firebaseConfig";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";

export const OrdersContext = createContext([]);

export const OrdersProvider = ({ children }) => {
  const { userInfo, setUserInfo } = useContext(UserContext);

  const { cart, getTotalCart, clearCart } = useContext(CartContext);

  const [orderList, setOrderList] = useLocalStorageState("orderList", {
    defaultValue: [],
  });
  const [orderIsLoading, setOrderIsLoading] = useState(true);

  const navigate = useNavigate();

  const getTotalOrders = () => {
    const totalOrders = orderList.length;
    return totalOrders;
  };
  const clearOrderList = () => {
    setOrderList([]);
  };
  const handleCreateOrder = (event) => {
    event.preventDefault();
    const ordenRef = collection(db, "Ordenes-infinity-ecommerce");
    addDoc(ordenRef, order)
      .then((response) => {
        toast(`✅ Se generó correctamente la orden de compra "${response.id}"`);
        setOrderList([...orderList, response.id]);
      })
      .then(() => {
        handleOrdersListToUser();
      })
      .catch((err) => {
        toast(`❌ Hubo un problema al crear la orden`);
        console.log(err);
      })
      .finally(() => {
        setOrderIsLoading(false);
        clearCart();
        navigate("/orders");
      });
  };

  const order = {
    buyer: userInfo,
    items: cart,
    total: getTotalCart(),
  };
  const handleChange = (event) => {
    setUserInfo((userInfo) => ({
      ...userInfo,
      [event.target.name]: event.target.value,
    }));
  };

  const handleOrdersListToUser = () => {
    setUserInfo({ ...userInfo, orders: orderList });
  };

  const updateStock = () => {
    const productRef = doc(
      db,
      "Productos-infinity-ecommerce",
      "001Cj2dl57OyVeGKgoQm"
    );
    updateDoc(productRef, { stock: 10 });
  };

  return (
    <OrdersContext.Provider
      value={{
        orderList,
        setOrderList,
        orderIsLoading,
        setOrderIsLoading,
        getTotalOrders,
        clearOrderList,
        handleCreateOrder,
        handleChange,
        updateStock
      }}
    >
      {children}
    </OrdersContext.Provider>
  );
};
