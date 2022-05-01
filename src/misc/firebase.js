import { initializeApp} from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

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
const app = initializeApp(firebaseConfig);
export const auth = app.auth();