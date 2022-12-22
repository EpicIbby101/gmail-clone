import firebase from "firebase/compat/app";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBOloFWFk-nFeh3hJiEmlvqPAPcOMLmaAw",
  authDomain: "clone-ad263.firebaseapp.com",
  projectId: "clone-ad263",
  storageBucket: "clone-ad263.appspot.com",
  messagingSenderId: "780828952093",
  appId: "1:780828952093:web:fb4087edd308c922aba8f4",
  measurementId: "G-JJ4RPD7BBR",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const provider = new GoogleAuthProvider();

export {  db, auth, provider };
