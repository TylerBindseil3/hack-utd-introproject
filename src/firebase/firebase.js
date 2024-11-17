// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDPJgC_0utyfgE_g19U1G5jYK64gIkGCPI",
  authDomain: "tylerjayproject.firebaseapp.com",
  projectId: "tylerjayproject",
  storageBucket: "tylerjayproject.firebasestorage.app",
  messagingSenderId: "1035455470573",
  appId: "1:1035455470573:web:c3617cb8ebc9e4f0d365e4",
  measurementId: "G-23M7N74SF8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);