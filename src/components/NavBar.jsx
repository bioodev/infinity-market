import { FaInfinity } from "react-icons/fa";
import CartWidget from "./CartWidget";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {

  const navigate = useNavigate();
  return (
    <div className="Navbar lg:flex justify-between items-center p-2 ">
      <div className="logo p-4 lg:p-2 flex items-center justify-center">
        <button href="/" className="text-3xl flex items-center justify-center flex-wrap">
          <FaInfinity className="leading-none hover:animate-bounce ease-in-out" />
          <h1 className="leading-noner font-black p-2 tracking-tighter">INFINITY MARKET</h1>
        </button>
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
            to="/category/categoria1"
            className={({ isActive }) => (isActive ? "ActiveOption" : "Option")}
          >
            Categoria 1
          </NavLink>
          <NavLink
            to="/category/categoria2"
            className={({ isActive }) => (isActive ? "ActiveOption" : "Option")}
          >
            Categoria 2
          </NavLink>
          <NavLink
            to="/category/categoria3"
            className={({ isActive }) => (isActive ? "ActiveOption" : "Option")}
          >
            Categoria 3
          </NavLink>

          <CartWidget cartCounter={9} />

        </nav>
      </div>
    </div>
  );
};
export default Navbar;
