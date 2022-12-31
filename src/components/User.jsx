import { useContext, useState } from "react";
import { UserContext } from "../contexts/UserContext";
import { FaGoogle } from "react-icons/fa";

const User = () => {
  const {
    handleUserGoogleLogin,
    handleCreateUserLoginEmail,
    handleChangeUserLoginEmail,
    handleUserEmailLogin,
    handleChangeUserEmailLogin,
  } = useContext(UserContext);
  const [showFormUser, setShowFormUser] = useState(false);
  const [showFormUserSignIn, setShowFormUserSignIn] = useState(false);
  return (
    <>
      <button
        className="flex items-center justify-center gap-4 px-4 py-2 m-auto text-white bg-black rounded shadow-sm lg:w-96 hover:bg-emerald-600 hover:shadow-md"
        onClick={handleUserGoogleLogin}
      >
        <FaGoogle /> Iniciar sesión con Google
      </button>

      <div className="flex flex-col ">
        <div className="flex items-center justify-center gap-2">
          <button
            onClick={() => {
              setShowFormUserSignIn(!showFormUserSignIn);
            }}
            className="px-4 py-2"
          >
            Iniciar sesión
          </button>
          <button
            onClick={() => {
              setShowFormUser(!showFormUser);
            }}
            className="px-4 py-2"
          >
            Registrarse
          </button>
        </div>

        {showFormUserSignIn && (
          <form
            onSubmit={handleUserEmailLogin}
            className="flex flex-col gap-2 m-auto lg:w-96"
          >
            <input
              placeholder="Email"
              name="email"
              id="email"
              onChange={handleChangeUserEmailLogin}
              type="email"
              className="px-4 py-2"
              required
            />
            <input
              placeholder="Password"
              name="password"
              id="passoword"
              onChange={handleChangeUserEmailLogin}
              type="password"
              className="px-4 py-2"
              required
            />
            <button className="flex items-center justify-center gap-2 px-4 py-2 text-white bg-black rounded shadow-sm hover:bg-emerald-600 hover:shadow-md">
              iniciar sesion
            </button>
          </form>
        )}

        {showFormUser && (
          <form
            onSubmit={handleCreateUserLoginEmail}
            className="flex flex-col gap-4 m-auto lg:w-96"
          >
            <input
              placeholder="Email"
              name="email"
              id="email"
              onChange={handleChangeUserLoginEmail}
              type="email"
              className="px-4 py-2"
              required
            />
            <input
              placeholder="Confirmacion de Email"
              name="emailconfirmation"
              id="emailconfirmation"
              onChange={handleChangeUserLoginEmail}
              type="email"
              className="px-4 py-2"
              required
            />
            <input
              placeholder="Password"
              name="password"
              id="passoword"
              onChange={handleChangeUserLoginEmail}
              type="password"
              className="px-4 py-2"
              required
            />
            <input
              placeholder="Confirmacion de Password"
              name="passwordconfirmation"
              id="passowordconfirmation"
              onChange={handleChangeUserLoginEmail}
              type="password"
              className="px-4 py-2"
              required
            />
            <button className="flex items-center justify-center gap-4 px-4 py-2 text-white bg-black rounded shadow-sm hover:bg-emerald-600 hover:shadow-md">
              Crear usuario
            </button>
          </form>
        )}
      </div>
    </>
  );
};

export default User;
