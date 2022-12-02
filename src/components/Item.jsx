import React from "react";

const Item = ({ dataItem }) => {
  return (
    <div className="bg-white cursor-pointer rounded-md shadow-sm ease-in-out duration-300 hover:ease-in-out hover:shadow-2xl border-solid hover:border-black flex flex-col items-center justify-center gap-6 p-6">
      <h2 className="text-2xl tracking-tight">{dataItem.names}</h2>
      <h3 className="text-sm font-black">{dataItem.category}</h3>
      <div className="text-sm">{dataItem.description.slice(0, 20)}...</div>
      {/*         <Link className='text-sm' to={`/items/${dataItem.id}`}>Detalles</Link>
       */}
    </div>
  );
};

export default Item;
