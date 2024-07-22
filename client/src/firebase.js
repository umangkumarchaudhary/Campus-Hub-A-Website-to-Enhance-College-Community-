// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "blinkblog-b0005.firebaseapp.com",
  projectId: "blinkblog-b0005",
  storageBucket: "blinkblog-b0005.appspot.com",
  messagingSenderId: "300182633657",
  appId: "1:300182633657:web:72ad3fdc41bc00c2062f68"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);