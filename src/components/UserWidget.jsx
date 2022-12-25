import { FaUser } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Userwidget = () => {
  return (
    <>
      <NavLink
        to="/user"
        className="flex items-center justify-center gap-1 text-sm border border-solid rounded-md shadow-md hover:shadow-lg hover:border-black "
      >
        <FaUser />
      </NavLink>
    </>
  );
};
export default Userwidget;
