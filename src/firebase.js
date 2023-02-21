// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCEbLE508jPmlxxdpmKVttTIdptd8fxUMs",
  authDomain: "tolet-housing-app.firebaseapp.com",
  projectId: "tolet-housing-app",
  storageBucket: "tolet-housing-app.appspot.com",
  messagingSenderId: "556057811671",
  appId: "1:556057811671:web:fb44df740d088ea620ae92",
};

//Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
