// yarn add firebase
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyApOiOdFXY0uDcGdFg0S1VbBQJi4BsbRnw",
  authDomain: "iub-shuttle-service.firebaseapp.com",
  projectId: "iub-shuttle-service",
  storageBucket: "iub-shuttle-service.appspot.com",
  messagingSenderId: "1032577420384",
  appId: "1:1032577420384:web:dab633ea024599a04a4705",
  measurementId: "G-1M2QDE3CGZ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export {db, auth, provider};