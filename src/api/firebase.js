import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDpXkGiZeZ09OsUJSwbtvUzICUskpLVNwU",
  authDomain: "gbchat9.firebaseapp.com",
  databaseURL: "https://gbchat9-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "gbchat9",
  storageBucket: "gbchat9.appspot.com",
  messagingSenderId: "403577477836",
  appId: "1:403577477836:web:014c1812023abf4c6bc069",
  measurementId: "G-7ZDJWBYY2T",
};

export const firebase = initializeApp(firebaseConfig);

export const auth = getAuth(firebase);
export const database = getDatabase(firebase);
