import { FaInfinity } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="grid select-none grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-1 gap-4 justify-center p-4 text-gray-500 text-justify">
      <div className="col-start-1 sm:col-start-1 md:col-start-2 lg:col-start-1">
        <img src="/267E.svg" className="opacity-40 w-1/2 m-auto" alt="" />
        <div className="text-sm">
          <FaInfinity className="inline-block mx-1" />
          <b><a href="https://infinity-market.vercel.app/">Infinity Market</a></b> es una tienda minimalista que se puede adaptar
          a distintos tipos de productos.
        </div>
      </div>
      <div className="">
        <img src="/E1C1_byn.svg" className="opacity-40 w-1/2 m-auto" alt="" />
        <div className="text-xs">
          Proyecto open-source desarrollado con React y Tailwindcss, por <a href="https://github.com/bioodev">Enrique Fernandez @bioodev </a>
           para <a href="https://www.coderhouse.cl/">Coderhouse</a>.
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
