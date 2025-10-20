// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAps5VUlP8X1G58S0H_bmCclpTFMQD0zTc",
  authDomain: "newspaper-website-f469a.firebaseapp.com",
  projectId: "newspaper-website-f469a",
  storageBucket: "newspaper-website-f469a.firebasestorage.app",
  messagingSenderId: "1099312735251",
  appId: "1:1099312735251:web:0a4afe5d267eb6ecea8be6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app