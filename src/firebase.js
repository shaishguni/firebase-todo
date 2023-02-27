// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBFRJLeK9CRU6w5UZE2v25sskLvToMX0UQ",
    authDomain: "todo-light.firebaseapp.com",
    projectId: "todo-light",
    storageBucket: "todo-light.appspot.com",
    messagingSenderId: "401025709274",
    appId: "1:401025709274:web:29d3456e393c020d52a1e3",
    measurementId: "G-FP7WWDJ0M9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);