import { useState } from "react";

const ItemQuantySelector = ({ dataItem }) => {
  const [quanty, setQuanty] = useState(1);
  const increment = () => {
    dataItem.stock > 0 && quanty < dataItem.stock
      ? setQuanty(quanty + 1)
      : console.log("err");
  };
  const decrement = () => {
    quanty > 1 ? setQuanty(quanty - 1) : console.log("err");
  };
  return (
    <div className="flex gap-2">
      <div className="bg-gray-200 px-6 py-2 font-black rounded text-center">
        {dataItem.stock > 0 ? quanty : "Stock agotado"}
      </div>
      <button
        onClick={increment}
        className="px-6 py-2 font-black text-base bg-gray-200 rounded active:bg-gray-300 active:shadow-inner hover:shadow-md"
      >
        +
      </button>
      <button
        onClick={decrement}
        className="px-6 py-2 font-black text-base bg-gray-200 rounded active:bg-gray-300 active:shadow-inner hover:shadow-md"
      >
        -
      </button>
    </div>
  );
};

export default ItemQuantySelector;
