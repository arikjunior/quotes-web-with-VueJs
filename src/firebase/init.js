// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-app.js";

// import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-analytics.js";

import firebase from 'firebase';
import firestore from 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyB4NyTsReFclEliOw4Li1loe8uh_BP07iM",
    authDomain: "simplechat-aplikasi.firebaseapp.com",
    projectId: "simplechat-aplikasi",
    storageBucket: "simplechat-aplikasi.appspot.com",
    messagingSenderId: "649248625115",
    appId: "1:649248625115:web:702e2ca3a708df568c57fe",
    measurementId: "G-RJYBPLGPP3"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
firebaseApp.firestore().settings({ timestampsInSnapshots: true });
export default firebaseApp.firestore();
