import { FaInfinity } from "react-icons/fa";
import CartWidget from "./CartWidget";
import NavbarButton from "./NavbarButton";

const Navbar = () => {
  const navbarMenuItems = ["TECNOLOGÍA", "AUDIO", "FAQ"];

  return (
    <div className="Navbar lg:flex justify-between items-center p-4 ">
      <div className="logo flex items-center justify-center">
        <button href="/" className="text-3xl font-black flex items-center">
          <FaInfinity />
          <h1 className="px-1">INFINITY MARKET</h1>
        </button>
      </div>
      <div className="navbar-menu">
        <div className="categorias gap-2 flex flex-wrap items-center justify-center text-sm ">
          {navbarMenuItems.map((label) => (
            <NavbarButton items={label} />
          ))}
          <CartWidget cartCounter={9} />
        </div>
      </div>
    </div>
  );
};
export default Navbar;
