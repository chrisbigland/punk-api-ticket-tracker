// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBw1to1TuDp795P0GIsGxwQ8srxkUV4toU",
  authDomain: "brewdogapi-66acb.firebaseapp.com",
  projectId: "brewdogapi-66acb",
  storageBucket: "brewdogapi-66acb.appspot.com",
  messagingSenderId: "173310284421",
  appId: "1:173310284421:web:2a30ed04fd440277290fec",
  measurementId: "G-4YM0B6Y2VH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);