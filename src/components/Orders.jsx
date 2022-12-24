import { toast } from "react-hot-toast";
import { OrdersContext } from "../contexts/OrdersContext";
import { useContext } from "react";

const Orders = () => {
  const { orderList, getTotalOrders } = useContext(OrdersContext);
  const totalOrders = getTotalOrders();

  const handleOrderId = (id) => {
    navigator.clipboard
      .writeText(id)
      .then(toast(`✅ Copiado al portapapeles: ${id}`));
  };

  if (totalOrders === 0) {
    return (
      <div className="flex flex-col items-center justify-center w-full gap-4 p-4 min-h-fit">
        <h1 className="p-4 pb-0 text-lg font-black text-gray-600 uppercase">
          No hay ordenes de compra todavia
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
    </div>
  );
};

export default Orders;
