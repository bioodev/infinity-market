import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

const User = () => {
  const { handleUserLogin, userInfo, userIsLoading } = useContext(UserContext);

  if (!userIsLoading) {
    return (
      <div className="flex flex-col items-center justify-center w-full gap-4 p-4 min-h-fit">
        <h1 className="p-4 pb-0 text-lg font-black text-gray-600 uppercase">
          Informacion de usuario
        </h1>
        <img referrerPolicy="no-referrer" className="rounded-full" src={userInfo.avatar} alt={userInfo.name} />
        <div className="px-4 py-2">Nombre: {userInfo.name}</div>
        <div>Email: {userInfo.email}</div>
        <div>Telefono: {userInfo.phone}</div>
      </div>
    );
  }

  return (
    <div>
      <div className="flex flex-col items-center justify-center w-full gap-4 p-4 min-h-fit">
        <h1 className="p-4 pb-0 text-lg font-black text-gray-600 uppercase">
          Google Auth
        </h1>
        <button
          className="px-4 py-2 m-auto text-white bg-black rounded shadow-sm lg:w-96 hover:bg-emerald-600 hover:shadow-md"
          onClick={handleUserLogin}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default User;
