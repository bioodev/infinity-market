import { FaInfinity } from "react-icons/fa";
import CartWidget from "./CartWidget";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {

  const navigate = useNavigate();
  return (
    <div className="Navbar lg:flex justify-between items-center p-2 ">
      <div className="logo p-4 lg:p-2 flex items-center justify-center">
        <NavLink to="/" className="text-3xl flex items-center justify-center flex-wrap">
          <FaInfinity className="leading-none hover:animate-bounce ease-in-out" />
          <h1 className="leading-noner text-center font-black p-2 tracking-tighter">INFINITY MARKET</h1>
        </NavLink>
      </div>
      <div className="navbar-menu p-2">
        <nav className="categorias gap-2 flex flex-wrap items-center justify-center text-sm ">
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

          <CartWidget cartCounter={9} />

        </nav>
      </div>
    </div>
  );
};
export default Navbar;
