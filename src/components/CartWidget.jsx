import { FaShoppingCart } from "react-icons/fa";

const Cartwidget = ({ cartCounter }) => {
  return (
    <>
      <button className="p-2 border-solid border rounded-md shadow-md hover:shadow-lg text-sm hover:border-black rounded flex justify-center items-center gap-1 ">
        <FaShoppingCart />
        {cartCounter}
      </button>
    </>
  );
};
export default Cartwidget;
