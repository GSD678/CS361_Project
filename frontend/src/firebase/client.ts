// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAkbPxM3VzRSTYg9FGmua4iIQfPmB74dBs",
    authDomain: "mmaclub-e3487.firebaseapp.com",
    projectId: "mmaclub-e3487",
    storageBucket: "mmaclub-e3487.appspot.com",
    messagingSenderId: "13647467355",
    appId: "1:13647467355:web:47491e1a382bf8676f007e",
    measurementId: "G-6CCPH49TE6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);