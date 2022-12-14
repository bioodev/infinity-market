import { FaInfinity } from "react-icons/fa";
import CartWidget from "./CartWidget";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import OrdersWidget from "./OrdersWidget";
import { OrdersContext } from "../contexts/OrdersContext";

const Navbar = () => {
  const { getCartCounter } = useContext(CartContext);
  const { getTotalOrders } = useContext(OrdersContext);
  const totalQuantity = getCartCounter();
  return (
    <div className="items-center justify-between p-2 Navbar lg:flex ">
      <div className="flex items-center justify-center p-4 logo lg:p-2">
        <NavLink
          to="/"
          className="flex flex-wrap items-center justify-center text-3xl"
        >
          <FaInfinity className="leading-none ease-in-out hover:animate-bounce" />
          <h1 className="p-2 font-black tracking-tighter text-center leading-noner">
            INFINITY MARKET
          </h1>
        </NavLink>
      </div>
      <div className="p-2 navbar-menu">
        <nav className="flex flex-wrap items-center justify-center gap-2 text-sm categorias ">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "ActiveOption" : "Option")}
          >
            Todo
          </NavLink>
          <NavLink
            to="/category/wallets"
            className={({ isActive }) => (isActive ? "ActiveOption" : "Option")}
          >
            Wallets
          </NavLink>
          <NavLink
            to="/category/nodos"
            className={({ isActive }) => (isActive ? "ActiveOption" : "Option")}
          >
            Nodos
          </NavLink>
          <NavLink
            to="/category/libros"
            className={({ isActive }) => (isActive ? "ActiveOption" : "Option")}
          >
            Libros
          </NavLink>
          <CartWidget cartCounter={totalQuantity} />
          {getTotalOrders() > 0 && <OrdersWidget />}
        </nav>
      </div>
    </div>
  );
};
export default Navbar;
