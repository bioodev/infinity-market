import React, { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Checkout = () => {
  const { cart, getTotalCart } = useContext(CartContext);
  const [userData, setUserData] = useState({
      name: "",
      email: "",
      phone: "",
      comments: "",
  });
  const [order, setOrder] = useState({})

  const navigate = useNavigate();

  const handleCreateOrder = (e) => {
    e.preventDefault();
    setOrder({
      buyer: {
        name: userData.name,
        email: userData.email,
        phone: userData.fono,
        comments: userData.comments,
      },
    items: cart,
    total: getTotalCart(),
    });
    toast(`✅ La orden de compra se envio correctamente`);
    setTimeout(() => {
      navigate("/");
    }, 3000);
  };

  const handleName = (event) => {
    event.persist();
    setUserData((userData) => ({
      ...userData,
      name: event.target.value,
    }));
  };
  const handleEmail = (event) => {
    event.persist();
    setUserData((userData) => ({
      ...userData,
      email: event.target.value,
    }));
  };
  const handlePhone = (event) => {
    event.persist();
    setUserData((userData) => ({
      ...userData,
      phone: event.target.value,
    }));
  };
  const handleComments = (event) => {
    event.persist();
    setUserData((userData) => ({
      ...userData,
      comments: event.target.value,
    }));
  };

  console.log(order)
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-fit">
      <h1 className="p-4 pb-0 text-lg font-black text-gray-600 uppercase ">
        Orden de Compra
      </h1>
      <form className="flex flex-col w-full gap-4 p-4 lg:w-96">
        <h2>Datos del Cliente:</h2>
        <input
          className="px-4 py-2"
          type="text"
          id="name"
          value={userData.name}
          placeholder="Nombre Completo"
          onChange={handleName}
        />
        <input
          className="px-4 py-2"
          type="email"
          value={userData.email}
          placeholder="Email"
          name="email"
          id="mail"
          onChange={handleEmail}
        />
        <input
          className="px-4 py-2"
          type="tel"
          value={userData.phone}
          name="phone"
          id="fono"
          placeholder="Teléfono"
          onChange={handlePhone}
        />
        <input
          className="px-4 py-2"
          type="text"
          value={userData.comments}
          name="comments"
          id="comments"
          placeholder="Comentarios"
          onChange={handleComments}
        />
        <button
          className="px-4 py-2 text-white bg-black rounded shadow-sm hover:bg-emerald-600 hover:shadow-md"
          onClick={handleCreateOrder}
        >
          Confirmar datos
        </button>
      </form>
    </div>
  );
};

export default Checkout;
