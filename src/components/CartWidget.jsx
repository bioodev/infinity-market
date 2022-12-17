import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Cartwidget = ({ cartCounter }) => {
  return (
    <>
      <NavLink
        to="/cart"
        className="flex items-center justify-center gap-1 p-2 text-sm border border-solid rounded rounded-md shadow-md hover:shadow-lg hover:border-black "
      >
        <FaShoppingCart />
        {cartCounter}
      </NavLink>
    </>
  );
};
export default Cartwidget;
