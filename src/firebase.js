// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAi_tTIDGpCXvRvJwCFGP6gnuWFiHDsE7Y",
  authDomain: "clone-12636.firebaseapp.com",
  projectId: "clone-12636",
  storageBucket: "clone-12636.appspot.com",
  messagingSenderId: "561477428502",
  appId: "1:561477428502:web:d6f7e2f352f2adb3a11c37",
  measurementId: "G-E1JYX50PFK",
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();
export default app;
