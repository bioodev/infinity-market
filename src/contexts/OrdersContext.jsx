import { createContext, useState } from "react";

export const OrdersContext = createContext([]);

export const OrdersProvider = ({ children }) => {
  const [orderList, setOrderList] = useState([]);
  const [orderIsLoading, setOrderIsLoading] = useState(true);

  const getTotalOrders = () => {
      const totalOrders = orderList.length
      return totalOrders
  };

  return (
    <OrdersContext.Provider
      value={{
        orderList,
        setOrderList,
        orderIsLoading,
        setOrderIsLoading,
        getTotalOrders
      }}
    >
      {children}
    </OrdersContext.Provider>
  );
};
