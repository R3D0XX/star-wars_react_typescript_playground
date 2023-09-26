// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
console.log('import.meta.env.VITE_APIKEY', import.meta.env.VITE_APIKEY)
const firebaseConfig = {
  apiKey: import.meta.env.Vite_APIKEY,
  authDomain: import.meta.env.Vite_AUTHDOMAIN,
  projectId: import.meta.env.Vite_PROJECTID,
  storageBucket: import.meta.env.Vite_STORAGEBUCKET,
  messagingSenderId: import.meta.env.Vite_MESSAGINGSENDERID,
  appId: import.meta.env.Vite_APPID,
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);