import { Link } from "react-router-dom";
import React from "react";

const Item = ({ dataItem }) => {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,.2), rgba(255,255,255,.2)), url(${dataItem.image})`,
      }}
      className="flex flex-col items-center justify-center bg-top bg-cover border-solid rounded shadow-lg hover:shadow-md active:shadow-inner active:bg-teal-200"
    >
      <Link to={`/products/${dataItem.id}`} className="flex flex-col items-center justify-center w-full h-full gap-4 px-4 py-12 rounded active:bg-teal-200 hover:backdrop-blur-sm bg-gradient-to-br from-white to-transparent">
        <h2 className="w-48 text-xl font-black text-center">{dataItem.name}</h2>
        <h3 className="p-1 text-sm font-black border-gray-200 border-solid rounded">USD $ {dataItem.price}</h3>
      </Link>

    </div>
  );
};

export default Item;
