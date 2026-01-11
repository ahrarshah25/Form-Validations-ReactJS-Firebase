import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDggVUc6gUdcfSCi2EN1KOLAmk7i3e_xQI",
  authDomain: "form-handling-reactjs.firebaseapp.com",
  projectId: "form-handling-reactjs",
  storageBucket: "form-handling-reactjs.firebasestorage.app",
  messagingSenderId: "998402126840",
  appId: "1:998402126840:web:fb690bc517a445da535c0d",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);