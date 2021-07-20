import firebase from 'firebase';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBCcWB6T7CqQcqB38nCyUNuxUAWLzasFIo",
    authDomain: "vue-fire-todo-c5966.firebaseapp.com",
    projectId: "vue-fire-todo-c5966",
    storageBucket: "vue-fire-todo-c5966.appspot.com",
    messagingSenderId: "48072940268",
    appId: "1:48072940268:web:c35aad13945646474463c9"
  };
  // Initialize Firebase
  export const db = firebase.initializeApp(firebaseConfig).firestore();