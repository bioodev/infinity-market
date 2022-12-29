import { OrdersContext } from "../contexts/OrdersContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const Orders = () => {
  const { orderList, getTotalOrders, clearOrderList } = useContext(OrdersContext);
  const totalOrders = getTotalOrders();

  const navigate = useNavigate();

  const handleOrderId = (id) => {
    navigate(`/orders/${id}`)
  };

  if (totalOrders === 0) {
    return (
      <div className="flex flex-col items-center justify-center w-full gap-4 p-4 min-h-fit">
        <h1 className="p-4 pb-0 text-lg font-black text-gray-600 uppercase">
          No hay ordenes de compra
        </h1>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center w-full gap-4 p-4 min-h-fit">
      <h1 className="p-4 pb-0 text-lg font-black text-gray-600 uppercase">
        Mis ordenes
      </h1>

      <div>📌 Guarda tu codigo de seguimiento:</div>
      {orderList.map((createdOrdersId, i) => (
        <button
          className="p-4 font-black bg-white rounded shadow-lg w-96 hover:shadow-md active:shadow-inner active:bg-teal-200"
          key={i}
          onClick={() => handleOrderId(createdOrdersId)}
        >
          {createdOrdersId}
        </button>
      ))}
      {
        <button onClick={clearOrderList}>Limpiar listado de ordenes</button>
      }
    </div>
  );
};

export default Orders;
