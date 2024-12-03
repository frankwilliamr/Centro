import { initializeApp } from "firebase/app";
import 'firebase/firestore'; // Importe o módulo do Firestore
import 'firebase/auth'; // Importe o módulo de autenticação (se necessário)
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDUR5Q69cZrj32MgVeAij3Fo8H7z-s-K9g",
    authDomain: "pedraviva-ae306.firebaseapp.com",
    projectId: "pedraviva-ae306",
    storageBucket: "pedraviva-ae306.appspot.com",
    messagingSenderId: "661583999612",
    appId: "1:661583999612:web:3b692c81d7709c30930ff9"
  };

// Inicialize o Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
export {auth};
export { db };
