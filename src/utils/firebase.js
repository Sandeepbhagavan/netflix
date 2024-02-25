// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC21u5ZzPpbT67Szk5yyVl5EEQ3YrFIRbM",
  authDomain: "netflix-3afed.firebaseapp.com",
  projectId: "netflix-3afed",
  storageBucket: "netflix-3afed.appspot.com",
  messagingSenderId: "589375883190",
  appId: "1:589375883190:web:99475f9a6baa647ce8a317",
  measurementId: "G-LWLFWXSFH8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);