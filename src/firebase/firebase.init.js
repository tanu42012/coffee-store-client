// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCcTxVHip2jj5thdLbhtYLVqcRgJ0S_Clc",
  authDomain: "coffee-store-app-3de9b.firebaseapp.com",
  projectId: "coffee-store-app-3de9b",
  storageBucket: "coffee-store-app-3de9b.firebasestorage.app",
  messagingSenderId: "636479305040",
  appId: "1:636479305040:web:dfc07162d813b8c03be855"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);