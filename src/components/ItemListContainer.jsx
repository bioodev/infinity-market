import { getItems, getItemsByCategory } from "../asyncMock";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { categoryId } = useParams([]);

  useEffect(() => {
    if (!categoryId) {
      getItems()
        .then((res) => {
          setItems(res);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      getItemsByCategory(categoryId)
        .then((res) => {
          getItemsByCategory(res);
          console.log(getItemsByCategory(res))
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [categoryId]);
  return (
    <div className="ItemListContainer text-4xl flex flex-col items-center justify-center w-full ">
      <h1 className="text-lg font-black p-4 pb-0">Productos</h1>
      <ItemList items={items} />
    </div>
  );
};
export default ItemListContainer;
