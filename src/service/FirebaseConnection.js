import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

let firebaseConfig = {
    //Código CDN aqui
};
if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}


export default firebase;