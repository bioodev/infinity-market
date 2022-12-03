import { useState, useEffect } from "react";
import { getProductsById } from "../asyncMock";
import { useParams } from "react-router-dom";
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {
  const [item, setItem] = useState({})
  const { productId } = useParams()
  const [isLoading, setIsLoading] = useState(true)


  useEffect(() => {
    getProductsById(productId)
      .then(res => {
        setItem(res);
      })
      .catch(err => {
        console.log(err);
      })
      .finally(
        setIsLoading(false)
        )
  }, [productId]);

  if (isLoading) {
    return <h1 className="p-8">Cargando datos...</h1>;
  }
  return (
    <div className="flex flex-col items-center justify-center w-full">
    <ItemDetail dataItem={item} />
    </div>
  );
};

export default ItemDetailContainer;
