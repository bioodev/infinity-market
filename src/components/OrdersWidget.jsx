import {useContext} from 'react'
import { FaListAlt } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import {OrdersContext} from '../contexts/OrdersContext'

const OrdersWidget = () => {

    const { getTotalOrders } = useContext(OrdersContext)
    const totalOrders = getTotalOrders();

  return (
    <>
      <NavLink
        to="/orders"
        className="flex items-center justify-center h-full gap-1 p-2 text-sm border border-solid rounded rounded-md shadow-md hover:shadow-lg hover:border-black "
      >
        <FaListAlt />
        {totalOrders}
      </NavLink>
    </>
  )
}

export default OrdersWidget