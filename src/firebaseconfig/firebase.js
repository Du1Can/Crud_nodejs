// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyASW7fmY6QmirPUaxO86s2UAOXdXqw9Gdg",
  authDomain: "crud-fire-react-1e3aa.firebaseapp.com",
  projectId: "crud-fire-react-1e3aa",
  storageBucket: "crud-fire-react-1e3aa.appspot.com",
  messagingSenderId: "888659483684",
  appId: "1:888659483684:web:649c71cf8b1429cab84cb1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const dh = getFirestore(app);