import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import { FaMinusCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cart, removeProduct, getTotalCart } = useContext(CartContext);
  const handleRemove = (id) => removeProduct(id);
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center w-full gap-4 p-4 m-auto mb-4">
      <h1 className="w-full col-span-1 p-4 pb-0 text-lg font-black text-center text-gray-600 uppercase ">
        Carrito de compra
      </h1>
      {getTotalCart() > 1 && (
        <div className="flex flex-col w-full gap-4 lg:w-96 md:w-96">
          {cart.map((item) => (
            <div
              className="grid items-center justify-center w-full grid-cols-3 gap-2 p-2 m-auto text-xs text-center bg-white rounded shadow-sm hover:shadow-md"
              key={item.id}
            >
              <div className="items-center justify-center col-span-1">
                <img
                  className="m-auto rounded max-h-32"
                  src={item.image}
                  alt={item.name}
                />
              </div>
              <div className="items-center justify-start col-span-2">
                <div className="col-span-4 text-lg">{item.name}</div>
                <div className="col-span-4">Precio: ${item.price}</div>
                <div className="col-span-4">Cantidad: {item.quantity}</div>
                <div className="col-span-4 font-bold">
                  Subtotal: ${item.quantity * item.price}
                </div>
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
      )}
      {getTotalCart() < 1 ? (
        <div className="grid items-center justify-center w-full grid-cols-1 gap-4 text-center lg:w-96 md:w-96">
          <div className="px-4 py-2">Carro vacío</div>
          <button
            className="px-4 py-2 m-auto text-white bg-black rounded shadow-sm hover:bg-emerald-600 hover:shadow-md"
            onClick={() => navigate("/")}
          >
            Agregar productos
          </button>
        </div>
      ) : (
        <>
          <div className="flex flex-col items-center justify-center w-full gap-4 m-auto font-black text-md lg:w-96 md:w-96">
            <div className="w-full px-4 py-2 text-center bg-white rounded shadow-sm">
              Total: ${getTotalCart()}
            </div>
            <button
              className="w-full px-4 py-2 text-center text-white bg-black rounded shadow-sm hover:bg-emerald-600 hover:shadow-md lg:col-span-2"
              onClick={() => navigate("/checkout")}
            >
              Confirmar compra
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
