import { createContext } from "react";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { toast } from "react-hot-toast";
import useLocalStorageState from "use-local-storage-state";
import { useNavigate } from "react-router-dom";

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

 const navigate = useNavigate(); 
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
          uid: user.uid,
          token: token,
        });
        toast(`✅ Se inició sesión como "${user.displayName}"`);
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
  const handleSignOutUser = () => {
    signOut(auth)
      .then(() => {
        toast(`✅ Se ha finalizado la sesión`);
        setUserInfo({ uid: "", password: "", email: "" });
      })
      .catch((error) => {
        toast(`❌ Se ha producido un error`);
      });
  };
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
          toast(`❌ No se pudo registrar al usuario. ${error}`);
        });
    } else {
      toast(`❌ Se produjo errores en el formulario`);
    }
  };
  const handleClearUserLocalData = (e) => {
    setUserInfo({ uid: ""})
    toast(`✅ Se han borrado datos de usuario`);
    navigate("/")
  }
  const handleChangeUserLoginEmail = (event) => {
    setUserInfo((user) => ({
      ...user,
      [event.target.name]: event.target.value,
    }));
  };
  const validateCreateUserForm = () => {
    if (
      userInfo.email === userInfo.emailconfirmation &&
      userInfo.password.length >= 6
    ) {
      toast(`✅ Se ha registrado al usuario con éxito`);
      return true;
    } else {
      toast(`❌ Confirma que esten correctos los campos. El password debe tener al menos 6 caracteres`);
      return false;
    }
  };
  const handleUserEmailLogin = (e) => {
    e.preventDefault();
      signInWithEmailAndPassword(auth, userInfo.email, userInfo.password)
        .then((result) => {
          setUserInfo({
            ...userInfo,
            uid: result.user.uid,
            email: result.user.email,
            token: result.user.accessToken,
            password: "",
            passwordconfirmation: "",
            emailconfirmation: "",
          });
          toast(`✅ Se ha sesión como ${userInfo.email}`);
        })
        .catch((error) => {
          toast(`❌ Hubo un problema al crear el usuario: ${error}`);
        });
  };

  const handleChangeUserEmailLogin = (event) => {
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
        handleSignOutUser,
        handleUserGoogleLogin,
        handleCreateUserLoginEmail,
        handleChangeUserLoginEmail,
        handleUserEmailLogin,
        handleChangeUserEmailLogin,
        handleClearUserLocalData,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
