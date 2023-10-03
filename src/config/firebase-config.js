// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBmO5AWHv9oDwxsxej4dQVyBoFLO7hLeoY",
    authDomain: "expense-tracker-23ced.firebaseapp.com",
    projectId: "expense-tracker-23ced",
    storageBucket: "expense-tracker-23ced.appspot.com",
    messagingSenderId: "583776012382",
    appId: "1:583776012382:web:d36277ffca8e4288f28ccf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);