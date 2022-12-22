import { CartContext } from "../contexts/CartContext";
import ItemQuantySelector from "./ItemQuantySelector";
import { useContext } from "react";
import { Link } from "react-router-dom";

const ItemDetail = ({ dataItem }) => {
  const { isInCart } = useContext(CartContext);
  return (
    <div className="grid w-full grid-cols-1 gap-4 p-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2">
      <div className="flex flex-col">
        <img
          className="object-scale-down max-h-screen bg-transparent border-solid rounded shadow-md"
          src={dataItem.image}
          alt={dataItem.name}
        />
      </div>
      <div className="flex flex-col items-center gap-2">
        <h1 className="text-3xl font-bold text-center">{dataItem.name}</h1>
        <h1 className="font-bold uppercase text-md">{dataItem.category}</h1>
        <h1 className="font-bold uppercase text-md">USD ${dataItem.price}</h1>
        {isInCart(dataItem.id) ? (
          <Link
            className="px-6 py-2 text-base font-black bg-gray-200 rounded active:bg-gray-300 active:shadow-inner hover:shadow-md"
            to="/cart"
          >
            Ver carrito
          </Link>
        ) : (
          <ItemQuantySelector dataItem={dataItem} />
        )}
        <div className="text-justify">{dataItem.description}</div>
      </div>
    </div>
  );
};

export default ItemDetail;
