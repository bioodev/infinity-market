import React, { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import { toast } from "react-hot-toast";
// import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../services/firebaseConfig";
const Checkout = () => {
  // const navigate = useNavigate();
  const { cart, getTotalCart, clearCart } = useContext(CartContext);
  const [order, setOrder] = useState({});
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    comments: "",
  });
  const handleChange = (event) => {
    setUser((user) => ({
      ...user,
      [event.target.name]: event.target.value,
    }));
    setOrder({
      buyer: user,
      items: cart,
      total: getTotalCart(),
    });
  };

  const handleCreateOrder = (event) => {
    event.preventDefault();
    const ordenRef = collection(db, "Ordenes-infinity-ecommerce");
    addDoc(ordenRef, order)
      .then((response) => {
        toast(`✅ Se generó correctamente la orden de compra "${response.id}" `);
      })
      .catch((err) => {
        toast(`❌ Hubo un problema al crear la orden`);
        console.log(err);
      })
      .finally(() => {
        // clearCart();
        // setTimeout(() => {
        //   navigate("/")
        // }, 3000)
      });
  };
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-fit">
      <h1 className="p-4 pb-0 text-lg font-black text-gray-600 uppercase ">
        Orden de Compra
      </h1>
      <form
        className="flex flex-col w-full gap-4 p-4 lg:w-96"
        onSubmit={handleCreateOrder}
      >
        <h2>Datos del Cliente:</h2>
        <input
          className="px-4 py-2"
          type="text"
          name="name"
          id="name"
          placeholder="Nombre Completo"
          onChange={handleChange}
          autoComplete="off"
        />
        <input
          className="px-4 py-2"
          type="email"
          placeholder="Email"
          name="email"
          id="email"
          onChange={handleChange}
          autoComplete="off"
        />
        <input
          className="px-4 py-2"
          type="tel"
          name="phone"
          id="phone"
          placeholder="Teléfono"
          onChange={handleChange}
          autoComplete="off"
        />
        <input
          className="px-4 py-2"
          type="text"
          name="comments"
          id="comments"
          placeholder="Comentarios"
          onChange={handleChange}
          autoComplete="off"
        />
        <button
          type="submit"
          className="px-4 py-2 text-white bg-black rounded shadow-sm hover:bg-emerald-600 hover:shadow-md"
        >
          Confirmar datos
        </button>
      </form>
    </div>
  );
};

export default Checkout;
