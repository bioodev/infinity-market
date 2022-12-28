import { createContext, useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-hot-toast";

export const UserContext = createContext([]);

export const UserProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState({
    name: "",
    lastname: "",
    email: "",
    uid: "",
    phone: "",
    avatar: "",
    wallet: "",
    address: "",
    token: "",
  });

  const [userIsLoading, setUserIsLoading] = useState(true);

  const auth = getAuth();
  const provider = new GoogleAuthProvider();


  const handleUserLoginEmail = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, userInfo.email, userInfo.password)
    .then((result) => {
      console.log(result)
      setUserInfo({ ...userInfo, uid: result.user.uid, email: result.user.email, token: result.user.accessToken } )
    })
    .catch((error) => {
      console.log(error)
    });

  }

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
  const handleChangeUserLoginEmail = (event) => {
    setUserInfo((user) => ({
      ...user,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <UserContext.Provider
      value={{
        userInfo,
        setUserInfo,
        userIsLoading,
        setUserIsLoading,
        handleUserLogin,
        handleUserLoginEmail,
        handleChangeUserLoginEmail
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
