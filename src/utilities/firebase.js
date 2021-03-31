
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyD4jJaGW8-wkiyemccWBD1K1F5L4jcpmio",
    authDomain: "vue-project-7e13a.firebaseapp.com",
    projectId: "vue-project-7e13a",
    storageBucket: "vue-project-7e13a.appspot.com",
    messagingSenderId: "880962840341",
    appId: "1:880962840341:web:c462e0aa466b2f44902b1c"
};

firebase.initializeApp(firebaseConfig);

export default firebase;