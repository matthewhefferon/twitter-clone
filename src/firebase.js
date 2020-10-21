import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyArw9cPggKK7ZICdLRekDseO2Oa5A58T24",
  authDomain: "twitter-clone-d0d20.firebaseapp.com",
  databaseURL: "https://twitter-clone-d0d20.firebaseio.com",
  projectId: "twitter-clone-d0d20",
  storageBucket: "twitter-clone-d0d20.appspot.com",
  messagingSenderId: "7261839882",
  appId: "1:7261839882:web:ce8eacd9173b392ed9b5f3",
  measurementId: "G-RV3WQ0SK6G",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
export default db;
