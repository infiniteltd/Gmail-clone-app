import { initializeApp } from "firebase/app";
import { getFirestore, serverTimestamp } from 'firebase/firestore';
import { GoogleAuthProvider, getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAVITAPJZQaEPNEETROW7IH_czS6OF4V30",
    authDomain: "app-clone-899fc.firebaseapp.com",
    projectId: "app-clone-899fc",
    storageBucket: "app-clone-899fc.appspot.com",
    messagingSenderId: "87386761428",
    appId: "1:87386761428:web:279f5e0178ea1c1fb1f341"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider(app);


export { db, auth, provider, serverTimestamp };