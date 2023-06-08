// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZXG2PczHiKirn49vKInewBZQGaH5OBPs",
  authDomain: "monkey-s-35999.firebaseapp.com",
  projectId: "monkey-s-35999",
  storageBucket: "monkey-s-35999.appspot.com",
  messagingSenderId: "928112993057",
  appId: "1:928112993057:web:bdfdfff28518f8b77c5460",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
