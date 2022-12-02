// yarn add firebase
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCvbsmh6LOhxNq6LLJGYZHtCSehiUjVsIQ",
  authDomain: "shuttle-service-6e48d.firebaseapp.com",
  projectId: "shuttle-service-6e48d",
  storageBucket: "shuttle-service-6e48d.appspot.com",
  messagingSenderId: "538803631458",
  appId: "1:538803631458:web:995f9b66e9969d864e283b",
  measurementId: "G-W7BHWC4QYK"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export {db, auth, provider};