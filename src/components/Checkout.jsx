import React, { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { OrdersContext } from "../contexts/OrdersContext";
import User from "./User";
import UserForm from "./UserForm";
import UserInfo from "./UserInfo";

const Checkout = () => {
  const { userInfo } = useContext(UserContext);
  const { orderIsLoading } = useContext(OrdersContext);
  const { uid } = userInfo;

  if (orderIsLoading) {
    return (
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col w-full gap-4 p-4">
          <h1 className="p-4 pb-0 text-lg font-black text-center text-gray-600 uppercase">
            Creando orden...
          </h1>
        </div>
      </div>
    );
  }
  return (
    <div className="flex flex-col items-start justify-center p-2 mb-8">
      <div className="grid w-full grid-cols-1 gap-4 p-4 lg:grid-cols-3">
        <h1 className="text-lg font-black text-center text-gray-600 uppercase lg:col-span-3">
          Checkout
        </h1>

        {uid === "" && (
          <div className="col-span-1 lg:col-span-3">
            <User />
          </div>
        )}

        {uid !== "" && (
          <>
            <div className="col-span1 lg:col-span-3"><h2 className="p-4 pb-0 text-lg font-black text-center text-gray-600 uppercase">
        Información de usuario
      </h2></div>
            <div className="grid col-span-1 p-2 m-auto">
              <UserInfo />
            </div>
            <div className="col-span-1 m-auto lg:col-span-2">
              <UserForm />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Checkout;
