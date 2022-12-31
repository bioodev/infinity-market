import { createContext, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";
import { UserContext } from "../contexts/UserContext";
import { toast } from "react-hot-toast";
import { db } from "../services/firebaseConfig";
import {
  addDoc,
  collection,
  getDocs,
  query,
  where,
  documentId,
  writeBatch,
  Timestamp,
} from "firebase/firestore";

export const OrdersContext = createContext([]);
export const OrdersProvider = ({ children }) => {
  const { userInfo, setUserInfo, handleClearUserLocalData } =
    useContext(UserContext);
  const { cart, getTotalCart, clearCart } = useContext(CartContext);
  const [orderIsLoading, setOrderIsLoading] = useState(false);
  const navigate = useNavigate();
  const [orderState, setOrderState] = useState("Pendiente");
  const [ordersFromDb, setOrdersFromDb] = useState([]);

  const getOrdersFromDb = () => {
    const ordersRef = collection(db, "Ordenes-infinity-ecommerce");
    const q = query(ordersRef, where("buyerUid", "==", userInfo.uid));
    getDocs(q).then((response) => {
      const ordersIds = response.docs.map((order) => {
        const orderid = order.id;
        return(orderid)
      });
      setOrdersFromDb( ordersIds, ...ordersFromDb )
    }).finally(() => {
      console.log("fin");
    });
  };

  const handleChangeOrderState = (newstate) => {
    setOrderState(newstate);
  };
  // const handleOrdersListToUser = () => {
  //   setUserInfo({ ...userInfo, orders: orderList });
  // };

  const handleCreateOrder = async () => {
    setOrderIsLoading(true);
    try {
      const order = {
        buyer: userInfo,
        items: cart,
        total: getTotalCart(),
        date: getDate(),
        state: orderState,
        buyerUid: userInfo.uid,
        orderId: "",
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
        toast(
          `✅ Se generó correctamente la orden de compra "${orderAdded.id}"`
        );
        // setOrderList([orderAdded.id, ...orderList]);
        // handleOrdersListToUser();
        clearCart();
        getOrdersFromDb()
        navigate("/orders");
      } else {
        toast(`❌ Hay productos fuera del stock`);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setOrderIsLoading(false);
    }
  };
  const handleChange = (event) => {
    setUserInfo((userInfo) => ({
      ...userInfo,
      [event.target.name]: event.target.value,
    }));
  };

  const getTotalOrders = () => {
    const totalOrders = ordersFromDb.length;
    return totalOrders;
  };
  const clearOrderList = () => {
    setOrdersFromDb([]);
  };
  const clearAllLocalData = () => {
    clearOrderList();
    clearCart();
    handleClearUserLocalData();
  };
  const getDate = () => {
    const date = Timestamp.now().toDate().toString();
    return date;
  };
  return (
    <OrdersContext.Provider
      value={{
        orderIsLoading,
        setOrderIsLoading,
        getTotalOrders,
        clearOrderList,
        handleCreateOrder,
        handleChange,
        handleChangeOrderState,
        clearAllLocalData,
        getOrdersFromDb,
        ordersFromDb,
        setOrdersFromDb,
      }}
    >
      {children}
    </OrdersContext.Provider>
  );
};
