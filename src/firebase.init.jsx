// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDbNDllGBYVWmWBvDMEkJzBQBp9yhJfhps",
  authDomain: "tunicalabs-m-p-l.firebaseapp.com",
  projectId: "tunicalabs-m-p-l",
  storageBucket: "tunicalabs-m-p-l.appspot.com",
  messagingSenderId: "913659172575",
  appId: "1:913659172575:web:5ddde554c480f8611ebb6a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;