// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBcSAoLpxiOM4KlQ_JfgM3oybiVuYLj4VY",
  authDomain: "nasaauth.firebaseapp.com",
  projectId: "nasaauth",
  storageBucket: "nasaauth.appspot.com",
  messagingSenderId: "139730149209",
  appId: "1:139730149209:web:7957c12fa188a07819f648"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore(app);
export default app;