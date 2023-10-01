// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBUTMk0EGbtz9MZhFdbNi3Cwtl5Cs1yxko",
  authDomain: "mohamilon-e40ae.firebaseapp.com",
  projectId: "mohamilon-e40ae",
  storageBucket: "mohamilon-e40ae.appspot.com",
  messagingSenderId: "430549460724",
  appId: "1:430549460724:web:ced0f96f9a1147b72c60a1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;
