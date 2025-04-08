// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBiKj1cDpZpODGXKJGqrm5J9g0zRfupT4I",
  authDomain: "fridgedoor-41657.firebaseapp.com",
  projectId: "fridgedoor-41657",
  storageBucket: "fridgedoor-41657.firebasestorage.app",
  messagingSenderId: "886032869293",
  appId: "1:886032869293:web:baaca6e90a274bdee6e324",
  measurementId: "G-7B2XSXMVE7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);