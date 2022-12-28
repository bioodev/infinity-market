import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { FaGoogle } from "react-icons/fa";

const User = () => {
  const { handleUserLogin, userInfo, userIsLoading, handleUserLoginEmail, handleChangeUserLoginEmail } = useContext(UserContext);

  if (!userIsLoading) {
    return (
      <div className="flex flex-col items-center">
        <img
          referrerPolicy="no-referrer"
          className="rounded-full"
          src={userInfo.avatar}
          alt={userInfo.name}
        />
      </div>
    );
  }

  return (
    <>
      <button
        className="flex items-center justify-center gap-4 px-4 py-2 text-white bg-black rounded shadow-sm hover:bg-emerald-600 hover:shadow-md"
        onClick={handleUserLogin}
      >
        <FaGoogle /> Iniciar Sesión
      </button>

      <div>
        <form onSubmit={handleUserLoginEmail} className="flex flex-col gap-4">
          <input placeholder="Email" name="email" id="email" onChange={handleChangeUserLoginEmail} type="email" className="px-4 py-2"/>
          <input placeholder="Password" name="password" id="passoword" onChange={handleChangeUserLoginEmail} type="password" className="px-4 py-2"/>
          <button className="flex items-center justify-center gap-4 px-4 py-2 text-white bg-black rounded shadow-sm hover:bg-emerald-600 hover:shadow-md">Crear usuario</button>
        </form>
      </div>
    </>
  );
};

export default User;
