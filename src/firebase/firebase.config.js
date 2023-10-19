// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDpGc6vSx0g6LxKqLryEwlqkSQaRzdI99U",
  authDomain: "tech-store-5d9b6.firebaseapp.com",
  projectId: "tech-store-5d9b6",
  storageBucket: "tech-store-5d9b6.appspot.com",
  messagingSenderId: "704265056336",
  appId: "1:704265056336:web:5e8d98435089e653cde155"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;