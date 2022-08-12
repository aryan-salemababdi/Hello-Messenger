import firebase from "firebase/app";
import "firebase/auth";




export const auth = firebase.initializeApp({
    apiKey: "AIzaSyA14zbEE40En9H9pfqu-kVl6lzsJtem2cU",
    authDomain: "hello-13305.firebaseapp.com",
    projectId: "hello-13305",
    storageBucket: "hello-13305.appspot.com",
    messagingSenderId: "934376028366",
    appId: "1:934376028366:web:7d20ef19f8601ad74f389f"
  }).auth();