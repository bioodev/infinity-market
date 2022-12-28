import React, { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import { toast } from "react-hot-toast";
import { addDoc, collection, updateDoc, doc } from "firebase/firestore";
import { db } from "../services/firebaseConfig";
import { OrdersContext } from "../contexts/OrdersContext";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import User from "./User";

const Checkout = () => {
  const { cart, getTotalCart, clearCart } = useContext(CartContext);
  const { orderList, setOrderList, setOrderIsLoading } =
    useContext(OrdersContext);
  const { userInfo, setUserInfo } = useContext(UserContext);

  const navigate = useNavigate();

  const order = {
    buyer: userInfo,
    items: cart,
    total: getTotalCart(),
  };
  const handleChange = (event) => {
    setUserInfo((userInfo) => ({
      ...userInfo,
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
        navigate("/orders");
      });
  };
  console.log(order);
  console.log(userInfo);

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-col w-full gap-4 p-4 lg:w-96">
        <h1 className="p-4 pb-0 text-lg font-black text-center text-gray-600 uppercase">
          Checkout
        </h1>
        {userInfo.uid === "" ? <User /> : ""}
      </div>
      {userInfo.uid !== "" ? (
        <>
          <h2>Información de usuario</h2>
          <form
            className="flex flex-col w-full gap-4 p-4 lg:w-96"
            onSubmit={handleCreateOrder}
          >
            <label className="inline-flex">
              Nombre
              <input
                className="px-4 py-2 mx-2 rounded"
                type="text"
                name="name"
                id="name"
                placeholder="Nombre *"
                onChange={handleChange}
                autoComplete="off"
                defaultValue={userInfo.name}
                required
              />
            </label>

            <label>
              Apellido
              <input
                className="px-4 py-2 rounded"
                type="text"
                name="lastname"
                id="lastname"
                placeholder="Apelllido *"
                onChange={handleChange}
                autoComplete="off"
                defaultValue={userInfo.lastname}
                required
              />
            </label>

            <label>
              Email
              <input
                className="px-4 py-2 rounded"
                type="email"
                placeholder="Email *"
                name="email"
                id="email"
                onChange={handleChange}
                autoComplete="off"
                defaultValue={userInfo.email}
                required
              />
            </label>

            <label>
              Telefono
              <input
                className="px-4 py-2 rounded"
                type="tel"
                name="phone"
                id="phone"
                placeholder="Teléfono +56912345678 *"
                onChange={handleChange}
                autoComplete="off"
                defaultValue={userInfo.phone}
                required
              />
            </label>

            <label>
              Direccion
              <input
                className="px-4 py-2 rounded"
                type="text"
                name="address"
                id="address"
                placeholder="Dirección de envío producto"
                onChange={handleChange}
                autoComplete="off"
                defaultValue={userInfo.address}
                required
              />
            </label>

            <label>
              Imagen de perfil
              <input
                className="px-4 py-2 rounded"
                type="url"
                name="avatar"
                id="avatar"
                placeholder="Avatar Imagen URL"
                onChange={handleChange}
                autoComplete="off"
                defaultValue={userInfo.avatar}
              />
            </label>

            <label>
              Direccion de Lightning
              <input
                className="px-4 py-2 rounded"
                type="text"
                name="addressln"
                id="addressln"
                placeholder="Dirección Lightning Network"
                onChange={handleChange}
                autoComplete="off"
                defaultValue={userInfo.addressln}
              />
            </label>
            <button
              type="submit"
              className="px-4 py-2 text-white bg-black rounded shadow-sm disabled hover:bg-emerald-600 hover:shadow-md "
            >
              Confirmar datos de usuario
            </button>
          </form>
        </>
      ) : (
        ""
      )}

      <button onClick={updateStock}>stock update</button>
    </div>
  );
};

export default Checkout;
