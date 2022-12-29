import { createContext } from "react";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  // signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { toast } from "react-hot-toast";
import useLocalStorageState from "use-local-storage-state";

export const UserContext = createContext([]);

export const UserProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useLocalStorageState("userInfo", {
    defaultValue: {
      name: "",
      lastname: "",
      email: "",
      emailconfirmation: "",
      uid: "",
      phone: "",
      avatar: "",
      address: "",
      wallet: "",
      token: "",
      orders: "",
    },
  });

  const auth = getAuth();
  const provider = new GoogleAuthProvider();

  const handleCreateUserLoginEmail = (e) => {
    e.preventDefault();

    if (validateCreateUserForm()) {
      createUserWithEmailAndPassword(auth, userInfo.email, userInfo.password)
        .then((result) => {
          setUserInfo({
            ...userInfo,
            uid: result.user.uid,
            email: result.user.email,
            token: result.user.accessToken,
          });
        })
        .catch((error) => {
          toast(`Hubo un problema al crear el usuario: ${error}`);
        });
    } else {
      toast(`Hay errores en el formulario`);

    }
  };

  const handleSignOutUser = () => {
    signOut(auth)
      .then(() => {
        toast(`✅ Se ha finalizado la sesion`);
        setUserInfo({ uid: "" });
      })
      .catch((error) => {
        toast(`❌ Se ha producido un error`);
      });
  };

  const handleUserGoogleLogin = () => {
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
        toast(`✅ Se inicio sesión como "${user.displayName}"`);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log(errorCode, errorMessage, email, credential);
        toast(`❌ Se ha producido un error`);
      });
  };
  const handleChangeUserLoginEmail = (event) => {
    setUserInfo((user) => ({
      ...user,
      [event.target.name]: event.target.value,
    }));
  };

  const validateCreateUserForm = () => {
    if (userInfo.email === userInfo.emailconfirmation && userInfo.password.length > 5) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <UserContext.Provider
      value={{
        userInfo,
        setUserInfo,
        handleSignOutUser,
        handleUserGoogleLogin,
        handleCreateUserLoginEmail,
        handleChangeUserLoginEmail,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
