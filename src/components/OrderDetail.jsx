import React from "react";
import { useNavigate } from "react-router-dom";

const OrderDetail = ({ itemOrder }) => {
  const { id, total, buyer, items, state, date } = itemOrder;
  const { name, lastname, email, phone, address } = buyer;
  const navigate = useNavigate();
  const handleBackToOrderList = () => {
    navigate("/orders");
  };
  return (
    <div className="flex flex-col items-center justify-center w-full gap-4 p-4 mb-4 md:w-96 lg:w-96">
      <h1 className="w-full p-4 pb-0 text-lg font-black text-center text-gray-600 uppercase">
        Detalle de Orden
      </h1>
      <div className="flex flex-col items-center justify-center gap-2 p-4 bg-white rounded shadow">
      <div className="w-full ">
        <h2 className="font-black uppercase"> ℹ️ Orden</h2>
        <h3>🧾 Codigo: {id}</h3>
        <h3>💲 Total: ${total}</h3>
        <h3>🔴 Estado: {state}</h3>
        <h3>🗓️ Fecha: {date}</h3>

      </div>
      <div className="w-full">
        <h2 className="font-black uppercase"> ℹ️ Usuario</h2>
        <div>
          <h3>
            👤 Nombre: {name} {lastname}
          </h3>
          <h3>📧 Email: {email}</h3>
          <h3>📲 Fono: {phone}</h3>
          <h3>📍 Dirección: {address}</h3>
        </div>
      </div>
      <div className="w-full">
        <h2 className="font-black uppercase">🛒 Productos:</h2>
        <ul>
          {items.map((prod, i) => {
            const { name, price, quantity, id } = prod;
            return (
              <li key={id} className="gap-2 py-2">
                <h3>🏷️{name}/🛍️{quantity}/💲{price * quantity}</h3>
              </li>
            );
          })}
        </ul>
      </div>

      </div>
      <div className="w-full">
        <button
          className="w-full px-4 py-2 text-white bg-black rounded shadow-sm disabled hover:bg-emerald-600 hover:shadow-md "
          onClick={handleBackToOrderList}
        >
          Volver
        </button>
      </div>
    </div>
  );
};

export default OrderDetail;
