import {useContext} from 'react'
import { UserContext } from "../contexts/UserContext";


const UserInfo = () => {
    const { userInfo, handleSignOutUser } = useContext(UserContext);
    const { avatar, name, email } = userInfo;

  return (
    <div className="flex flex-col items-center justify-center gap-4 p-4 overflow-hidden text-center bg-gray-200 rounded shadow lg:w-fit">

        {avatar && (
            <div className="flex flex-col items-center">
              <img
                referrerPolicy="no-referrer"
                className="rounded-full shadow-lg"
                src={avatar}
                alt={name}
              />
            </div>
          )}
          <div className="px-4 py-2 overflow-hidden bg-white w-fit">
          <h2 >👤 Usuario:</h2>
          <h2 >{email}</h2>
          </div>

          <button
            className="px-4 py-2 bg-white rounded shadow hover:bg-neutral-200"
            onClick={() => handleSignOutUser()}
          >
            ❌ Cerrar sesión
          </button>
          
        </div>

  )
}

export default UserInfo