import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import { FaMinusCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, removeProduct, getTotalCart } = useContext(CartContext);
  const handleRemove = (id) => removeProduct(id);

  return (
    <div className="grid items-center justify-center grid-cols-1">
      <h1 className="p-4 pb-0 text-lg font-black text-center text-gray-600 uppercase">
        Carrito de compra
      </h1>
      {getTotalCart() < 1 ? (
        <div className="grid items-center justify-center grid-cols-1 gap-4 p-4 text-center">
          <div className="px-4 py-2">Carro vacío</div>
          <Link
            className="px-4 py-2 m-auto text-white bg-black rounded shadow-sm lg:w-96 hover:bg-emerald-600 hover:shadow-md"
            to="/"
          >
            Agregar productos
          </Link>
        </div>
      ) : (
        <>
          <div className="grid items-center justify-center grid-cols-1 gap-4 p-4 m-auto font-black text-md lg:col-span-3">
            <div className="px-4 py-2 text-center bg-white rounded shadow-sm lg:w-96">
              Total: ${getTotalCart()}
            </div>
            <Link
              className="px-4 py-2 text-center text-white bg-black rounded shadow-sm lg:w-96 hover:bg-emerald-600 hover:shadow-md lg:col-span-2"
              to="/checkout"
            >
              Confirmar compra
            </Link>
          </div>
        </>
      )}

      {getTotalCart() > 1 ? (
        <div className="grid w-full gap-4 p-4 lg:grid-cols-3 md:grid-cols-3">
          <h1 className="text-lg font-black text-center text-gray-600 uppercase lg:col-span-3 md:col-span-3">
            Lista de productos
          </h1>
          {cart.map((item) => (
            <div
              className="grid items-center justify-center grid-cols-3 gap-2 p-2 text-xs text-center bg-white rounded shadow-sm hover:shadow-md"
              key={item.id}
            >
              <div className="items-center justify-center col-span-1">
                <img
                  className="m-auto rounded max-h-32"
                  src={item.image}
                  alt={item.name}
                />
              </div>
              <div className="items-center justify-center col-span-2">
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
      ) : (
        ""
      )}
    </div>
  );
};

export default Cart;
