import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

let firebaseConfig = {
    //Código CDN aqui
    apiKey: "AIzaSyA1eM8KfLreFxpyffl0A8zpDcycEyao2YE",
    authDomain: "sistemasr-a51db.firebaseapp.com",
    databaseURL: "https://sistemasr-a51db-default-rtdb.firebaseio.com",
    projectId: "sistemasr-a51db",
    storageBucket: "sistemasr-a51db.appspot.com",
    messagingSenderId: "388099048797",
    appId: "1:388099048797:web:a934e6230c0d4b713814b4",
    measurementId: "G-S6JLWMJ9YS"
};
if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}


export default firebase;