// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB5s-ULlfjgbYnze93uBjVk9NaCsWIGk8Q",
    authDomain: "letmebook-89716.firebaseapp.com",
    databaseURL: "https://letmebook-89716-default-rtdb.firebaseio.com",
    projectId: "letmebook-89716",
    storageBucket: "letmebook-89716.appspot.com",
    messagingSenderId: "1087879858586",
    appId: "1:1087879858586:web:60047674c5384b61319223",
    measurementId: "G-60FSZW5BJ7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
const db = getFirestore(app);

export default db;