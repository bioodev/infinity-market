import React, { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import { toast } from "react-hot-toast";
import { useState } from "react";
import { addDoc, collection, updateDoc, doc } from "firebase/firestore";
import { db } from "../services/firebaseConfig";
import { OrdersContext } from "../contexts/OrdersContext";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const { cart, getTotalCart, clearCart } = useContext(CartContext);
  const { orderList, setOrderList, setOrderIsLoading } =
    useContext(OrdersContext);

  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    lastname: "",
    email: "",
    phone: "",
    comments: "",
  });
  const order = {
    buyer: user,
    items: cart,
    total: getTotalCart(),
  };
  const handleChange = (event) => {
    setUser((user) => ({
      ...user,
      [event.target.name]: event.target.value,
    }));
  };

  const updateStock = () => {
    const productRef = doc(
      db,
      "Productos-infinity-ecommerce",
      "001Cj2dl57OyVeGKgoQm"
    );
    updateDoc(productRef, { stock: 10 });
  };

  const handleCreateOrder = (event) => {
    event.preventDefault();
    const ordenRef = collection(db, "Ordenes-infinity-ecommerce");
    addDoc(ordenRef, order)
      .then((response) => {
        toast(`✅ Se generó correctamente la orden de compra "${response.id}"`);
        setOrderList([...orderList, response.id]);
      })
      .catch((err) => {
        toast(`❌ Hubo un problema al crear la orden`);
        console.log(err);
      })
      .finally(() => {
        setOrderIsLoading(false);
        clearCart();
        navigate('/orders')

      });
  };

  return (
    <div className="flex flex-col items-center justify-center w-full gap-4 p-4 min-h-fit">
      <h1 className="p-4 pb-0 text-lg font-black text-gray-600 uppercase ">
        Orden de Compra
      </h1>
      <form
        className="flex flex-col w-full gap-4 p-4 lg:w-96"
        onSubmit={handleCreateOrder}
      >
        <h2>Datos del Cliente:</h2>
        <input
          className="px-4 py-2 rounded"
          type="text"
          name="name"
          id="name"
          placeholder="Nombre"
          onChange={handleChange}
          autoComplete="off"
          value={user.name}
        />
        <input
          className="px-4 py-2 rounded"
          type="text"
          name="lastname"
          id="lastname"
          placeholder="Apelllido"
          onChange={handleChange}
          autoComplete="off"
        />
        <input
          className="px-4 py-2 rounded"
          type="email"
          placeholder="Email"
          name="email"
          id="email"
          onChange={handleChange}
          autoComplete="off"
        />
        <input
          className="px-4 py-2 rounded"
          type="tel"
          name="phone"
          id="phone"
          placeholder="Teléfono +56912345678"
          onChange={handleChange}
          autoComplete="off"
        />
        <input
          className="px-4 py-2 rounded"
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
      <button onClick={updateStock}>stock update</button>
    </div>
  );
};

export default Checkout;
