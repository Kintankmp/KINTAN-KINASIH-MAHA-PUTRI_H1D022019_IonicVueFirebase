// src/utils/firebase.ts
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDli3psmtts-IlbT0OQc8MKtrczpI8SZCE",
  authDomain: "vue-firebase-bdc08.firebaseapp.com",
  projectId: "vue-firebase-bdc08",
  storageBucket: "vue-firebase-bdc08.firebasestorage.app",
  messagingSenderId: "868280906799",
  appId: "1:868280906799:web:b4512a079d1beccd9882da",
};

const firebase = initializeApp(firebaseConfig);
const auth = getAuth(firebase);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };