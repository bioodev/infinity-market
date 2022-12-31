import { useContext } from "react";
import { OrdersContext } from "../contexts/OrdersContext";
import { UserContext } from "../contexts/UserContext";

const UserForm = () => {
  const { handleCreateOrder, handleChange } = useContext(OrdersContext);
  const { userInfo } = useContext(UserContext);

  const { name, lastname, email, phone, address, wallet } = userInfo;

  return (
    <>
      <form
        className="grid grid-cols-1 gap-4 p-4 md:grid-cols-2"
        onSubmit={handleCreateOrder}
      >
        <label className="flex flex-wrap items-center justify-start w-full shadow">
          <span className="w-full px-4 py-2 bg-white">Nombre:</span>
          <input
            className="w-full px-4 py-2 rounded form-control"
            type="text"
            name="name"
            id="name"
            placeholder="ej: Juan"
            onChange={handleChange}
            autoComplete="off"
            defaultValue={name}
            required
          />
        </label>
        <label className="flex flex-wrap items-center justify-start w-full shadow">
          <span className="w-full px-4 py-2 bg-white">Apellido:</span>
          <input
            className="w-full px-4 py-2 rounded form-control"
            type="text"
            name="lastname"
            id="lastname"
            placeholder="ej: Pérez"
            onChange={handleChange}
            autoComplete="off"
            defaultValue={lastname}
            required
          />
        </label>
        <label className="flex flex-wrap items-center justify-start w-full shadow">
          <span className="w-full px-4 py-2 bg-white">Email:</span>
          <input
            className="w-full px-4 py-2 rounded form-control"
            type="email"
            placeholder="ej: juanperez@email.com"
            name="email"
            id="email"
            onChange={handleChange}
            autoComplete="off"
            defaultValue={email}
            required
          />
        </label>
        <label className="flex flex-wrap items-center justify-start w-full shadow">
          <span className="w-full px-4 py-2 bg-white">Teléfono:</span>
          <input
            className="w-full px-4 py-2 rounded form-control"
            type="tel"
            name="phone"
            id="phone"
            placeholder="ej: 56912345678"
            onChange={handleChange}
            autoComplete="off"
            defaultValue={phone}
            required
          />
        </label>
        <label className="flex flex-wrap items-center justify-start w-full shadow">
          <span className="w-full px-4 py-2 bg-white ">Dirección:</span>
          <input
            className="w-full px-4 py-2 rounded form-control"
            type="text"
            name="address"
            id="address"
            placeholder="ej: Santa María 1234, Providencia, Santiago, Chile"
            onChange={handleChange}
            autoComplete="off"
            defaultValue={address}
            required
          />
        </label>
        <label className="flex flex-wrap items-center justify-start w-full shadow">
          <span className="w-full px-4 py-2 bg-white">Dirección LN:</span>
          <input
            className="w-full px-4 py-2 rounded form-control"
            type="text"
            name="wallet"
            id="wallet"
            placeholder="Dirección Lightning Network"
            onChange={handleChange}
            autoComplete="off"
            defaultValue={wallet}
          />
        </label>
        <div className="flex justify-center m-auto md:col-span-2 lg:col-span-2">
          <button
            type="submit"
            className="px-4 py-2 m-auto text-white bg-black rounded shadow-sm disabled hover:bg-emerald-600 hover:shadow-md "
          >
            ✔️ Confirmar información
          </button>
        </div>
      </form>
    </>
  );
};

export default UserForm;
