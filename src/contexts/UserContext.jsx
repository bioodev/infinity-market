import { createContext, useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { toast } from "react-hot-toast"

export const UserContext = createContext([]);

export const UserProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState([]);

  const [userIsLoading, setUserIsLoading] = useState(true);

  const auth = getAuth();
  const provider = new GoogleAuthProvider();

  const handleUserLogin = () => {
    setUserIsLoading(true);

    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        setUserInfo({
          name: user.displayName,
          email: user.email,
          phone: user.phoneNumber,
          avatar: user.photoURL,
          token: token,
        });
        toast(`✅ Ingreso correcto como "${user.displayName}"`);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log(errorCode);
        console.log(errorMessage);
        console.log(email);
        console.log(credential);
      })
      .finally(() => {

        setUserIsLoading(false);
      });
  };

  return (
    <UserContext.Provider
      value={{
        userInfo,
        setUserInfo,
        userIsLoading,
        setUserIsLoading,
        handleUserLogin,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
