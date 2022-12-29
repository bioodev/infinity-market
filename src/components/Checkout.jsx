import React, { useContext } from "react";

import { UserContext } from "../contexts/UserContext";
import User from "./User";
import UserForm from "./UserForm";

const Checkout = () => {

  const { userInfo, handleSignOutUser } = useContext(UserContext);


  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-col w-full gap-4 p-4">
        <h1 className="p-4 pb-0 text-lg font-black text-center text-gray-600 uppercase">
          Checkout
        </h1>
        {userInfo.uid === "" ? <User /> : ""}
        {userInfo.avatar && (
          <div className="flex flex-col items-center">
            <img
              referrerPolicy="no-referrer"
              className="rounded-full"
              src={userInfo.avatar}
              alt={userInfo.name}
            />
          </div>
        )}
      </div>
      {userInfo.uid !== "" ? (
        <>
          <h1 className="p-2">Estás comprando como {userInfo.email} </h1>
          <button
            className="px-4 py-2 bg-white rounded shadow"
            onClick={handleSignOutUser}
          >
            Cerrar sesión
          </button>
          <UserForm />
        </>
      ) : (
        ""
      )}

    </div>
  );
};

export default Checkout;
