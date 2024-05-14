
import { getAuth } from "firebase/auth";
import 'firebase/auth';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyB5NwCF3x955bfCQXu_HCA5Vx6aOQI-J_0",
  authDomain: "ecommerce-b0f9d.firebaseapp.com",
  projectId: "ecommerce-b0f9d",
  storageBucket: "ecommerce-b0f9d.appspot.com",
  messagingSenderId: "331844580053",
  appId: "1:331844580053:web:eb219628230c8c6b02685c"
};

const app = initializeApp(firebaseConfig);

 export const auth = getAuth(app);
 







