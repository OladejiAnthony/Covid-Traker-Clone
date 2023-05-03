// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyChs2m5Pm_J6GbVyJ8sMeffJ9y2UTxhYxo",
  authDomain: "covid-tracker-58776.firebaseapp.com",
  projectId: "covid-tracker-58776",
  storageBucket: "covid-tracker-58776.appspot.com",
  messagingSenderId: "307281409409",
  appId: "1:307281409409:web:dea7d265cce7bcddae2480",
  measurementId: "G-GNTN67Q13R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
