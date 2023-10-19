// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD9g64Hh1g878xJu5s4AHaZEbFe0t_9WMw",
  authDomain: "new-brand-product.firebaseapp.com",
  projectId: "new-brand-product",
  storageBucket: "new-brand-product.appspot.com",
  messagingSenderId: "441956485987",
  appId: "1:441956485987:web:d45689a39a9db662326156"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
export default auth;