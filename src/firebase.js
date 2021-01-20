// For Firebase JS SDK v7.20.0 and later, measurementId is optional
/* const firebaseConfig = {
 ,
}; */

import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCHwdjIP3zO_hBRZrzNCYn3i66Pk8zIRK0",
  authDomain: "todo-app-36957.firebaseapp.com",
  projectId: "todo-app-36957",
  storageBucket: "todo-app-36957.appspot.com",
  messagingSenderId: "827434713361",
  appId: "1:827434713361:web:80fd8c2279af3368e6ccb0",
  measurementId: "G-0JZJP8JL1X",
});

const db = firebaseApp.firestore();

export default db
