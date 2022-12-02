// Import the functions you need from the SDKs you need
import { firebase } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyBhvkpMzl-LGg4BPP2mDdbm17ZytY_b0_g",
    authDomain: "flipdesk-2.firebaseapp.com",
    projectId: "flipdesk-2",
    storageBucket: "flipdesk-2.appspot.com",
    messagingSenderId: "109403351395",
    appId: "1:109403351395:web:dacd78b63565488acecb56"
};

// Initialize Firebase
const app = () => {
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    } else {
        firebase.app();
    }
}


// Initialize Firestore
const database = firebase.database(app)
const db = getFirestore();
export const auth = getAuth();
const provider = new GoogleAuthProvider();

export { database, firebase, provider };
