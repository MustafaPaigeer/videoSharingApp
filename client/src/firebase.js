// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAuNwFQwN90pj8oH8NJs4oSp4iKxDLrHEM",
  authDomain: "video-9fb21.firebaseapp.com",
  projectId: "video-9fb21",
  storageBucket: "video-9fb21.appspot.com",
  messagingSenderId: "627032298015",
  appId: "1:627032298015:web:e64c802fc084ddb41bfb2a"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();

export default app;