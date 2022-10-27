import { initializeApp } from "firebase/app" ;   



const firebaseConfig = {
  apiKey: "AIzaSyBPPsWt9gPGLjH_zB2NAIXKp_tTejf4u5Y",
  authDomain: "todolist-5cce9.firebaseapp.com",
  projectId: "todolist-5cce9",
  storageBucket: "todolist-5cce9.appspot.com",
  messagingSenderId: "261878158150",
  appId: "1:261878158150:web:0fee8dd9a2b2f1180a8b47"
};

export const app = initializeApp ( firebaseConfig );
