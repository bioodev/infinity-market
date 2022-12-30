import { createContext, useState, useContext } from "react";
import useLocalStorageState from "use-local-storage-state";
import { toast } from "react-hot-toast";
import {
  addDoc,
  collection,
  getDocs,
  query,
  where,
  documentId,
  writeBatch,
} from "firebase/firestore";
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
  const [orderIsLoading, setOrderIsLoading] = useState(false);
  const navigate = useNavigate();
  const handleCreateOrder = async () => {
    setOrderIsLoading(true);
    try{
      const order = {
        buyer: userInfo,
        items: cart,
        total: getTotalCart(),
      };
      const batch = writeBatch(db);
      const ids = cart.map((prod) => prod.id);
      const productsRef = query(
        collection(db, "Productos-infinity-ecommerce"),
        where(documentId(), "in", ids)
      );
      const productsAddedToCartFromFirestore = await getDocs(productsRef);
      const { docs } = productsAddedToCartFromFirestore;
      const outOfStock = [];
      docs.forEach((doc) => {
        const dataDoc = doc.data();
        const stockDb = dataDoc.stock;
        const productAddedToCart = cart.find((prod) => prod.id === doc.id);
        const prodQuantity = productAddedToCart?.quantity;
        if (stockDb >= prodQuantity) {
          batch.update(doc.ref, { stock: stockDb - prodQuantity });
        } else {
          outOfStock.push({ id: doc.id, ...dataDoc });
        }
      });
      if (outOfStock.length === 0) {
        await batch.commit();
        const ordenRef = collection(db, "Ordenes-infinity-ecommerce");
        const orderAdded = await addDoc(ordenRef, order);
        toast(`✅ Se generó correctamente la orden de compra "${orderAdded.id}"`);
        setOrderList([...orderList, orderAdded.id]);
        handleOrdersListToUser();
        clearCart();
        navigate("/orders");
      } else {
        toast(`❌ Hay productos fuera del stock`);
      }
    }
    catch (error) {
      console.error(error)
    } finally {
      setOrderIsLoading(false)
    }
  }
  const handleChange = (event) => {
    setUserInfo((userInfo) => ({
      ...userInfo,
      [event.target.name]: event.target.value,
    }));
  };
  const handleOrdersListToUser = () => {
    setUserInfo({ ...userInfo, orders: orderList });
  };
  const getTotalOrders = () => {
    const totalOrders = orderList.length;
    return totalOrders;
  };
  const clearOrderList = () => {
    setOrderList([]);
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
      }}
    >
      {children}
    </OrdersContext.Provider>
  );
};