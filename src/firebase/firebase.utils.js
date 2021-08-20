import firebase from 'firebase/app'
import 'firebase/firebase-firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBfRaggKotyA0stRzDcVwYkVWGq46Xhu6Y",
    authDomain: "crwon-cloth.firebaseapp.com",
    projectId: "crwon-cloth",
    storageBucket: "crwon-cloth.appspot.com",
    messagingSenderId: "562265738013",
    appId: "1:562265738013:web:ebe8721a6393d389192ff4"
  };

  firebase.initializeApp(firebaseConfig)

  export const auth = firebase.auth()
  export const firestore = firebase.firestore()

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({'prompt': 'select_account'})

  export const signInWithGoogle = () => auth.signInWithPopup(provider)

  export default firebase
  
