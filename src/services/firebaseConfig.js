import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyCdzucTAYpJXFLIDsQ712PfB2kUCkFlafo",
    authDomain: "event---controle.firebaseapp.com",
    projectId: "event---controle",
    storageBucket: "event---controle.firebasestorage.app",
    messagingSenderId: "1099414677293",
    appId: "1:1099414677293:web:11841f0878faa941d755a4",
    measurementId: "G-XQ2V1LP2B4"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db, createUserWithEmailAndPassword };