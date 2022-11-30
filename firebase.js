// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBhvkpMzl-LGg4BPP2mDdbm17ZytY_b0_g",
    authDomain: "flipdesk-2.firebaseapp.com",
    projectId: "flipdesk-2",
    storageBucket: "flipdesk-2.appspot.com",
    messagingSenderId: "109403351395",
    appId: "1:109403351395:web:dacd78b63565488acecb56"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore();
const auth = getAuth();
const provider = new GoogleAuthProvider();

export { db, auth, provider };
