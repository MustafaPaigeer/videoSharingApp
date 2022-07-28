// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.FIREBASE_KEY,
  authDomain: "video-ff66f.firebaseapp.com",
  projectId: "video-ff66f",
  storageBucket: "video-ff66f.appspot.com",
  messagingSenderId: "939449230581",
  appId: "1:939449230581:web:b4cdedc6822bc19e4f91bc",
  measurementId: "G-ZXZEM6VW8N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const provider = new GoogleAuthProvider();

export default app;