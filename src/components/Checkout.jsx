import React, { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../services/firebaseConfig";
const Checkout = () => {
  const navigate = useNavigate();
  const { cart, getTotalCart, clearCart } = useContext(CartContext);
  const [order, setOrder] = useState({});
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
    comments: "",
  });
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
  const handleCreateOrder = (e) => {
    const ordenRef = collection(db, "Ordenes-infinity-ecommerce");
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
    })
    addDoc(ordenRef, order)
      .then((response) => {
        console.log(response.id)
        toast(`✅ La orden "${response.id}" de compra se envio correctamente`);

      })
      .catch((err) => {
        console.log(err)
      })
      .finally(() => {
        clearCart();
        setTimeout(() => {
          navigate("/")
        }, 3000)
      })
  }

  console.log(order);
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
