import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

const AddItemButton = ({ dataItem, quanty }) => {
  const { addToCart } = useContext(CartContext);
  const productToAdd = {
    id: dataItem.id,
    name: dataItem.name,
    price: dataItem.price,
    quantity: quanty,
    image: dataItem.image,
  };
  const handleClickAdd = () => {
    addToCart(productToAdd);
  };
  return (
    <button
      onClick={handleClickAdd}
      className="px-6 py-2 text-base font-black bg-gray-200 rounded active:bg-gray-300 active:shadow-inner hover:shadow-md"
    >
      Agregar al carro
    </button>
  );
};

export default AddItemButton;
