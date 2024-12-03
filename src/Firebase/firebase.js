// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAAQF7pobjb81mSzgRRA1XI44hMoyU7vig",
  authDomain: "coffee-store-6e7a0.firebaseapp.com",
  projectId: "coffee-store-6e7a0",
  storageBucket: "coffee-store-6e7a0.firebasestorage.app",
  messagingSenderId: "754861088819",
  appId: "1:754861088819:web:18e2f12b79e0159b1a0346"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;