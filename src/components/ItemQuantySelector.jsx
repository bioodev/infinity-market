import { useState } from "react";
import AddItemButton from "./AddItemButton";

const ItemQuantySelector = ({ dataItem, addToCart }) => {
  const [quanty, setQuanty] = useState(1);
  const increment = () => {
    dataItem.stock > 0 && quanty < dataItem.stock
      ? setQuanty((prev) => prev + 1)
      : console.log("err");
  };
  const decrement = () => {
    quanty > 1 ? setQuanty((prev) => prev - 1) : console.log("err");
  };

  return (
    <div className="flex flex-wrap items-center justify-center gap-2">
      <button
        onClick={decrement}
        className="px-6 py-2 text-base font-black bg-gray-200 rounded active:bg-gray-300 active:shadow-inner hover:shadow-md "
      >
        -
      </button>
      <div className="px-6 py-2 text-base font-black bg-gray-200 rounded ">
        {dataItem.stock > 0 ? quanty : "Stock agotado"}
      </div>

      <button
        onClick={increment}
        className="px-6 py-2 text-base font-black bg-gray-200 rounded active:bg-gray-300 active:shadow-inner hover:shadow-md"
      >
        +
      </button>
      <AddItemButton dataItem={dataItem} quanty={quanty} addToCart={addToCart} />
    </div>
  );
};

export default ItemQuantySelector;
