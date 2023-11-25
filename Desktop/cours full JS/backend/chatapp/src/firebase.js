import firebase from 'firebase/compat/app';
import 'firebase/compat/database';

const firebaseConfig = {
    apiKey: "AIzaSyAtr2zVHsu0lAoO-tlAkgfYpEY1WwpqvOw",
    authDomain: "bader-firebase-project1.firebaseapp.com",
    databaseURL: "https://bader-firebase-project1-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "bader-firebase-project1",
    storageBucket: "bader-firebase-project1.appspot.com",
    messagingSenderId: "456034911719",
    appId: "1:456034911719:web:33646e5b7bd9e182132942"
};

firebase.initializeApp(firebaseConfig); // Initialisez Firebase directement

const database = firebase.database(); // Initialisez la base de données Firebase directement

export { firebase, database };

