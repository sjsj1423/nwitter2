import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBJFDVG0U-d-yVm4Ssvo1LI8EA3kNksi4E",
    authDomain: "nwitter2-9040d.firebaseapp.com",
    projectId: "nwitter2-9040d",
    storageBucket: "nwitter2-9040d.appspot.com",
    messagingSenderId: "375192435871",
    appId: "1:375192435871:web:fff857b83e539e340b76aa"
  };

firebase.initializeApp(firebaseConfig);

export const authService = firebase.auth();
