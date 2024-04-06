// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC3LBXvQsz44y7Kcyh04d3Hps9FIipwZNs",
  authDomain: "questtp-63d9f.firebaseapp.com",
  projectId: "questtp-63d9f",
  storageBucket: "questtp-63d9f.appspot.com",
  messagingSenderId: "936340325470",
  appId: "1:936340325470:web:90aa4299265aa0d20ba0cf",
  measurementId: "G-7E3VP52538",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);
export { auth };
