// Import the functions you need from the SDKs you need
// import * as firebase from "firebase";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// import * as firebase from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAsGh2NRkYsdD8mg7kZ4mxdwH2UG7FdHOY",
  authDomain: "fir-auth-915ce.firebaseapp.com",
  projectId: "fir-auth-915ce",
  storageBucket: "fir-auth-915ce.appspot.com",
  messagingSenderId: "716064312014",
  appId: "1:716064312014:web:cad80bf1ed467f7f759e9f"
};

// Initialize Firebase
let app;
if(firebase.apps.length === 0){
    app = firebase.initializeApp(firebaseConfig);
}else{
    app = firebase.app();
}

const auth = firebase.auth();

export { auth};