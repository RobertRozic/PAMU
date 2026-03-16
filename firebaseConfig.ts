// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAooT4Td5I0KHmk6KLzJWyHCjPqxSmDhDw",
    authDomain: "pamu-test.firebaseapp.com",
    projectId: "pamu-test",
    storageBucket: "pamu-test.firebasestorage.app",
    messagingSenderId: "1058883158063",
    appId: "1:1058883158063:web:de56a7bae98c39cb7846da",
    measurementId: "G-6QX21SVM86"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);