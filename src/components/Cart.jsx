import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import { FaMinusCircle } from "react-icons/fa";

const Cart = () => {
  const { cart, addToCart, isInCart, removeProduct, getCartCounter } =
    useContext(CartContext);
  const handleRemove = (id) => removeProduct(id);

  return (
    <div className="flex flex-col items-center justify-center w-full min-h-fit">
      <h1 className="p-4 pb-0 text-lg font-black text-gray-600 uppercase ">
        Carrito de compra
      </h1>
      <div className="grid items-center justify-center w-full grid-cols-1 gap-4 p-4 lg:grid-cols-2">
        {cart < 1 ? <div className="flex items-center justify-center lg:col-span-2">Carro vacío</div> : ""}

        {cart.map((item) => (
          <div
            className="grid items-center justify-center grid-cols-2 gap-2 px-4 py-2 text-xs font-black text-center bg-white rounded shadow-sm lg:grid-cols-6 hover:shadow-md"
            key={item.id}
          >
            <div className="flex flex-col items-center justify-center lg:col-span-1">
              <img className="rounded" src={item.image} alt={item.name} />
            </div>
            <div className="grid items-center justify-center grid-cols-4 gap-2 p-2 lg:col-span-5">
              <div className="col-span-4 text-lg">{item.name}</div>
              <div className="col-span-4">Precio: ${item.price}</div>
              <div className="col-span-4">Cantidad: {item.quantity}</div>
              <div className="col-span-4">Subtotal: ${item.quantity * item.price}</div>
              <div
                className="flex justify-center col-span-4 cursor-pointer hover:text-red-600 active:text-red-300"
                onClick={() => handleRemove(item.id)}
              >
                <FaMinusCircle />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
