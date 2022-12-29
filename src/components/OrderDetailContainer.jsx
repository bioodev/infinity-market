import {useState, useEffect} from 'react'
import { getDoc, doc } from "firebase/firestore";
import { db } from "../services/firebaseConfig";
import { useParams } from 'react-router-dom';
import OrderDetail from './OrderDetail';

const OrderDetailContainer = () => {

    const [itemOrder, setItemOrder] = useState({});
    const { orderId } = useParams();
    const [isLoadingOrderDetail, setIsLoadingOrderDetail] = useState(true);

    useEffect(() => {
    const docRef = doc(db, "Ordenes-infinity-ecommerce", orderId);
    setIsLoadingOrderDetail(true);
    getDoc(docRef)
      .then((doc) => {
        const itemOrderData = doc.data();
        const itemOrderAdapted = { id: doc.id, ...itemOrderData };
        setItemOrder(itemOrderAdapted);
      })
      .catch((err) => {
        console.log(err)
      })
      .finally(() => {
        setIsLoadingOrderDetail(false);
      });
  }, [orderId]);

  if (isLoadingOrderDetail) {
    return (
      <div className="flex flex-col items-center justify-center w-full p-8">
        Cargando datos...
      </div>
    );
  }
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <OrderDetail itemOrder={itemOrder} />
    </div>)
}

export default OrderDetailContainer