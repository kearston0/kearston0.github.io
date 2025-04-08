"use strict";
import { auth } from "../firebase";
import { signInWithPopup, GoogleAuthProvider } 
from "firebase/auth";const Login = () => {
   const loginWithGoogle = async () => {
     const provider = new GoogleAuthProvider();
     await signInWithPopup(auth, provider);
   };
   return (
     <div className="flex flex-col items-center mt-20">
       <h2 className="text-2xl font-bold mb-4">Login</h2>
       <button
         onClick={loginWithGoogle}
         className="bg-blue-500 text-white px-4 py-2 rounded"
       >
         Sign in with Google
       </button>
     </div>
   );
 };
 export default Login;
