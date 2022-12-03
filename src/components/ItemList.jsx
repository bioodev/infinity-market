import React from "react";
import Item from "./Item";

const ItemList = ({ dataItems }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 w-full gap-4 p-4">
      {dataItems.map((dataItem) => (
        <Item key={dataItem.id} dataItem={dataItem} />
      ))}
    </div>
  );
};

export default ItemList;
