import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../services/firebaseConfig";

const ItemDetailContainer = () => {
  const [item, setItem] = useState({});
  const { productId } = useParams();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const docRef = doc(db, "Productos-infinity-ecommerce", productId);
    getDoc(docRef)
      .then((doc) => {
        const productData = doc.data();
        const productAdapted = { id: doc.id, ...productData };
        setItem(productAdapted);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [productId]);
  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center w-full p-8">
        Cargando datos...
      </div>
    );
  }
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <ItemDetail dataItem={item} />
    </div>
  );
};

export default ItemDetailContainer;
