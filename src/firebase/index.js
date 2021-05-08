import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBCxKVVw7ccb3Nk4iNcxLOqxldR8Ig5C_Q",
    authDomain: "portyleria-molho.firebaseapp.com",
    projectId: "portyleria-molho",
    storageBucket: "portyleria-molho.appspot.com",
    messagingSenderId: "365334469239",
    appId: "1:365334469239:web:3d014798906b0c46b64472",
    measurementId: "G-7LYW8SNHZP"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default db;