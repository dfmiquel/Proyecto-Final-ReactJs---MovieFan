import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDh54-lpAA3QGfoaJ92USapzBvu6mEM0wk",
  authDomain: "moviefanshop-80580.firebaseapp.com",
  projectId: "moviefanshop-80580",
  storageBucket: "moviefanshop-80580.appspot.com",
  messagingSenderId: "166699622121",
  appId: "1:166699622121:web:fd463bb79837b30f395a78"
};

// Initialize Firebase

export const appFirebase = initializeApp(firebaseConfig);
export const db = getFirestore()