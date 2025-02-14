import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Firebase config
const firebaseConfig = {
    apiKey: "AIzaSyAZorpO68dWk5JjGqQxXYxiseE0hoy14_8",
    authDomain: "buckyclass-f87f0.firebaseapp.com",
    projectId: "buckyclass-f87f0",
    storageBucket: "buckyclass-f87f0.firebasestorage.app",
    messagingSenderId: "565533603393",
    appId: "1:565533603393:web:e30be0b5d9bde6343cb8c0",
    measurementId: "G-B1EG5NYETP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
