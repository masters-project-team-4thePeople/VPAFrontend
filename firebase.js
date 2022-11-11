import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDXzcqOItrdQsB0qwluVYGgV9bFywuxlns",
    authDomain: "vpamasterproject.firebaseapp.com",
    projectId: "vpamasterproject",
    storageBucket: "vpamasterproject.appspot.com",
    messagingSenderId: "1091727972570",
    appId: "1:1091727972570:web:825f61e759ed9650026de3",
    measurementId: "G-K197WGNZRG"
  };
  
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();

export {
  auth,
  db
}