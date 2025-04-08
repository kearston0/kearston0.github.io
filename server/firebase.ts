import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBiKj1cDpZpODGXKJGqrm5J9g0zRfupT4I",
  authDomain: "fridgedoor-41657.firebaseapp.com",
  projectId: "fridgedoor-41657",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
