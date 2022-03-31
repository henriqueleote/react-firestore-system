import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAsZjRwgRjmV_FhEArYPH-L4gK0xaDDenw",
  authDomain: "managesystem-tech.firebaseapp.com",
  databaseURL: "https://managesystem-tech-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "managesystem-tech",
  storageBucket: "managesystem-tech.appspot.com",
  messagingSenderId: "980701693700",
  appId: "1:980701693700:web:d52b742b7006f1608e7251"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);