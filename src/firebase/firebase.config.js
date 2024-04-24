// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBCw4NRK1tRNqmEoDK4L7uevbSbXPbYOiM",
  authDomain: "coffee-store-2cfc4.firebaseapp.com",
  projectId: "coffee-store-2cfc4",
  storageBucket: "coffee-store-2cfc4.appspot.com",
  messagingSenderId: "86131065193",
  appId: "1:86131065193:web:4fda04a016fd9bf0f43df8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)