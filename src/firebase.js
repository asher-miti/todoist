import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyAhRbAqJyJ9O_sAUCIM9s6cpq3HP4nz8ms",
  authDomain: "todoist-146fa.firebaseapp.com",
  databaseURL: "https://todoist-146fa.firebaseio.com",
  projectId: "todoist-146fa",
  storageBucket: "todoist-146fa.appspot.com",
  messagingSenderId: "832186323012",
  appId: "1:832186323012:web:e9b92738e9b72933c7ec11",
});

export { firebaseConfig as firebase };
