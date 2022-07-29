import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import config from "./config";
var fireKey = config.FIRE_KEY
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: `${fireKey}`,
  authDomain: "game-inventory-7ad00.firebaseapp.com",
  projectId: "game-inventory-7ad00",
  storageBucket: "game-inventory-7ad00.appspot.com",
  messagingSenderId: "346223489478",
  appId: "1:346223489478:web:3b83ea2b01bd9a9a05c2c7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)