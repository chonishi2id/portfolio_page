// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAnalystics, logEvent } from "firebase/analystics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDPshtMMirkK1VhiK-CiFbVzSfedBpGTzw",
  authDomain: "personal-website-843e1.firebaseapp.com",
  projectId: "personal-website-843e1",
  storageBucket: "personal-website-843e1.appspot.com",
  messagingSenderId: "115268531808",
  appId: "1:115268531808:web:5d4aea5298bc54d1afb505",
  measurementId: "G-XL37ZJTJX5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
logEvent(analytics, 'notification_received');