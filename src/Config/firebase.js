import { getAuth } from 'firebase/auth';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore'; 

const firebaseConfig = {
    apiKey: "AIzaSyA940yj69NglOViuviIQ_s8LMyawIxXeyM",
    authDomain: "e-shop-1668c.firebaseapp.com",
    projectId: "e-shop-1668c",
    storageBucket: "e-shop-1668c.appspot.com",
    messagingSenderId: "198191248695",
    appId: "1:198191248695:web:d91b05cff37f7d2c1496b2",
    measurementId: "G-XT2Q1FC93W"
};

export const firebaseApp = firebase.initializeApp(firebaseConfig)
export const auth = getAuth(firebaseApp)
