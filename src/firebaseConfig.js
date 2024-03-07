import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyD--C5lIsGKpMVVyyyIxNPbcP8vIsnurSQ",
    authDomain: "web-app-b613e.firebaseapp.com",
    projectId: "web-app-b613e",
    storageBucket: "web-app-b613e.appspot.com",
    messagingSenderId: "135821785350",
    appId: "1:135821785350:web:9f17c0576715a3da318687"
  };

 export  const app = initializeApp(firebaseConfig)
 export const auth = getAuth(app)
 export const db = getFirestore(app)


