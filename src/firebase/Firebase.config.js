// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_apiKey, 
  authDomain:import.meta.env.VITE_authDomain, 
  projectId:import.meta.env.VITE_projectId, 
  storageBucket:import.meta.env.VITE_storageBucket, 
  messagingSenderId:import.meta.env.VITE_messagingSenderId, 
  appId:import.meta.env.VITE_appId

  
  // apiKey: "AIzaSyBQUlJYhzuQQnnnBoiLEoL6490PoUpJPo4",
  // authDomain: "radiant-lab.firebaseapp.com",
  // projectId: "radiant-lab",
  // storageBucket: "radiant-lab.appspot.com",
  // messagingSenderId: "394607264500",
  // appId: "1:394607264500:web:ee9c3044fe771b49bfd4a1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 const auth = getAuth(app);
 export default auth;