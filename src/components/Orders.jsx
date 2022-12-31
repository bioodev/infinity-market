import { OrdersContext } from "../contexts/OrdersContext";
import { UserContext } from "../contexts/UserContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import UserInfo from "./UserInfo";

const Orders = () => {
  const {
    getTotalOrders,
    clearOrderList,
    clearAllLocalData,
    getOrdersFromDb,
    ordersFromDb,
  } = useContext(OrdersContext);
  const { userInfo } = useContext(UserContext);
  const totalOrders = getTotalOrders();
  const navigate = useNavigate();
  const handleOrderId = (id) => {
    navigate(`/orders/${id}`);
  };

  if (totalOrders === 0) {
    return (
      <div className="flex flex-col items-center justify-center w-full gap-4 p-4 min-h-fit">
        <h1 className="p-4 pb-0 text-lg font-black text-gray-600 uppercase">
          🏳️ No hay ordenes de compra
        </h1>
        {userInfo.uid !== "" && <UserInfo />}
        <div className="flex flex-col gap-4 pb-4 w-96">
          <button
            className="w-full px-4 py-2 text-black bg-white rounded shadow disabled hover:bg-emerald-600 hover:shadow-md "
            onClick={() => clearAllLocalData()}
          >
            🗑️ Borrar todos los datos locales
          </button>
          <button
            className="w-full px-4 py-2 text-white bg-black rounded shadow disabled hover:bg-emerald-600 hover:shadow-md "
            onClick={() => navigate("/cart")}
          >
            🛒 Ir al carrito
          </button>
          <button
            className="w-full px-4 py-2 text-white bg-black rounded shadow disabled hover:bg-emerald-600 hover:shadow-md "
            onClick={() => navigate("/")}
          >
            ↩️ Ir a la tienda
          </button>
        </div>
      </div>
    );
  }
  return (
    <div className="grid items-start justify-center w-full grid-cols-1 gap-4 p-4 mb-4 lg:grid-cols-3 lg:w-full md:m-auto md:w-96">
      <h1 className="col-span-1 p-4 pb-0 text-lg font-black text-center text-gray-600 uppercase lg:col-span-3">
        Ordenes de compra
      </h1>

      <div className="grid items-center justify-center grid-cols-1 gap-4 p-4">
        {userInfo.uid !== "" && (
          <div className="m-auto">
            <h1 className="pb-2 font-black text-center">Usuario</h1>
            <UserInfo />
          </div>
        )}

        <h1 className="font-black text-center">Menu</h1>
        <button
          className="w-full px-4 py-2 text-black bg-white rounded shadow disabled hover:bg-emerald-600 hover:shadow-md "
          onClick={() => clearOrderList()}
        >
          🧹 Limpiar listado de ordenes
        </button>
        <button
          className="w-full px-4 py-2 text-black bg-white rounded shadow disabled hover:bg-emerald-600 hover:shadow-md "
          onClick={() => clearAllLocalData()}
        >
          🗑️ Borrar todos los datos locales
        </button>
        <button
          className="w-full px-4 py-2 text-white bg-black rounded shadow disabled hover:bg-emerald-600 hover:shadow-md "
          onClick={() => navigate("/cart")}
        >
          🛒 Ir al carrito
        </button>
        <button
          className="w-full px-4 py-2 text-white bg-black rounded shadow disabled hover:bg-emerald-600 hover:shadow-md "
          onClick={() => navigate("/")}
        >
          ↩️ Ir a la tienda
        </button>
        <button onClick={() => getOrdersFromDb}>obtener ordenes</button>
      </div>
      <div className="grid grid-cols-1 col-span-1 gap-4 p-2 py-4 overflow-hidden lg:col-span-2">
        <h1 className="font-black text-center">Listado de Ordenes</h1>
        {ordersFromDb.map((createdOrdersId, i) => (
          <button
            className="w-full p-4 m-auto overflow-hidden font-black bg-white rounded shadow-lg hover:shadow-md active:shadow-inner active:bg-teal-200"
            key={i}
            onClick={() => handleOrderId(createdOrdersId)}
          >
            🧾 {createdOrdersId}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Orders;
