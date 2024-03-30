// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB7t5XoZVxfI6-WxKc3hiZ_TedbnrDhl2I",
  authDomain: "netflix-gpt-56676.firebaseapp.com",
  projectId: "netflix-gpt-56676",
  storageBucket: "netflix-gpt-56676.appspot.com",
  messagingSenderId: "308932824103",
  appId: "1:308932824103:web:f56397f99c5f3fdac65202",
  measurementId: "G-VEP578C1E1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();