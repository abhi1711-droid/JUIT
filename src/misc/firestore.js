import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCq9yXE3VoYcTB9I3TwRA3Kn8Nl6siuLt4",
  authDomain: "jaypeeapp-ce9bb.firebaseapp.com",
  databaseURL: "https://jaypeeapp-ce9bb-default-rtdb.firebaseio.com",
  projectId: "jaypeeapp-ce9bb",
  storageBucket: "jaypeeapp-ce9bb.appspot.com",
  messagingSenderId: "639951136757",
  appId: "1:639951136757:web:a0afa6c911c4bdb72022bc",
  measurementId: "G-TN965KRCV9"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
export const db=firebase.firestore();
