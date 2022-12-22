import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import { getDocs, collection, query, where, orderBy } from "firebase/firestore";
import { db } from "../services/firebaseConfig";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { categoryId } = useParams();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const collectionRef = categoryId
      ? query(
          collection(db, "Productos-infinity-ecommerce"),
          where("category", "==", categoryId)
        )
      : query(
        collection(db, "Productos-infinity-ecommerce"),
        orderBy("price", "asc")
      );

    getDocs(collectionRef)
      .then((response) => {
        const productsAdapted = response.docs.map((doc) => {
          const data = doc.data();
          return { id: doc.id, ...data };
        });
        setItems(productsAdapted);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [categoryId]);

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center w-full p-8">
        Cargando datos...
      </div>
    );
  }
  return (
    <div className="flex flex-col items-center justify-center w-full text-4xl ItemListContainer">
      <h1 className="p-4 pb-0 text-lg font-black text-gray-600 uppercase ">
        {!categoryId ? `Todos los productos` : ""}
        {categoryId ? `${categoryId}` : ""}{" "}
      </h1>
      <ItemList dataItems={items} />
    </div>
  );
};
export default ItemListContainer;
