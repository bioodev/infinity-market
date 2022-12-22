// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCn76pnG5Q-Jg_K-mYstQ0uR3y6l4w9mjo",
  authDomain: "infinity-ecommerce.firebaseapp.com",
  projectId: "infinity-ecommerce",
  storageBucket: "infinity-ecommerce.appspot.com",
  messagingSenderId: "451732319134",
  appId: "1:451732319134:web:ed689df6e0a9b0392c048f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
