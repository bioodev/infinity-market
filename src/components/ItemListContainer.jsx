import { getProducts, getProductsByCategory } from "../asyncMock";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { categoryId } = useParams();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!categoryId) {
      getProducts()
        .then((res) => {
          setItems(res)
        })
        .catch((err) => {
          console.log(err)
        })
        .finally(() => {
          setIsLoading(false)
        });
    } else {
      getProductsByCategory(categoryId)
        .then((res) => {
          setItems(res)
        })
        .catch((err) => {
          console.log(err)
        })
        .finally(() => {
          setIsLoading(false)
        });
    }
  }, [categoryId]);

  if (isLoading) {
    return <div className="flex flex-col items-center justify-center w-full p-8">Cargando datos...</div>;
  }
  return (
    <div className="flex flex-col items-center justify-center w-full text-4xl ItemListContainer min-h-fit ">
      <h1 className="p-4 pb-0 text-lg font-black text-gray-600 uppercase ">{ (!categoryId) ? `Todos los productos` : "" }{ (categoryId) ? `${categoryId}` : "" } </h1>
      <ItemList dataItems={items} />
    </div>
  );
};
export default ItemListContainer;
