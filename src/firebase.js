import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyAUcvNHiWPR88Ct8Qrngr1BKg22ZITRIpI",
    authDomain: "tinder-clone-d7fb0.firebaseapp.com",
    databaseURL: "https://tinder-clone-d7fb0.firebaseio.com",
    projectId: "tinder-clone-d7fb0",
    storageBucket: "tinder-clone-d7fb0.appspot.com",
    messagingSenderId: "821624249094",
    appId: "1:821624249094:web:3eb988486ca8976ab41c87",
    measurementId: "G-LBSZGVWZ8F"
  };


const firebaseApp=firebase.initializeApp(firebaseConfig);  


const database=firebaseApp.firestore();


export default database;