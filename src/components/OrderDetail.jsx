import React from "react";
import { useNavigate } from "react-router-dom";

const OrderDetail = ({ itemOrder }) => {
  const { id, total, buyer, items } = itemOrder;
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
      <div className="w-full">
        <h2>🧾 Codigo: {id}</h2>
        <h2>💳 Total a pagar: ${total}</h2>
        <h2>🔴 Estado de la orden: Pendiente</h2>
      </div>
      <div className="w-full">
        <h2> ℹ️ Informacion de usuario</h2>
        <div>
          <p>
            👤 Nombre completo: {name} {lastname}
          </p>
          <p>📧 Email: {email}</p>
          <p>📲 Fono: {phone}</p>
          <p>📍 Direccion: {address}</p>
        </div>
      </div>
      <div className="w-full">
        <h2>🛒 Detalle de productos:</h2>
        <div>
          {items.map((prod, i) => {
            const { name, price, quantity, id } = prod;
            return (
              <div key={id} className="gap-2 py-2">
                <p>🏷️ Producto: {name}</p>
                <p>💲 Precio: ${price}</p>
                <p>🛍️ Cantidad: {quantity}</p>
              </div>
            );
          })}
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
