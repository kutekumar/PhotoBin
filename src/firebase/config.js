import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDGk-kWL-n3xceROeuhc10RbylpB3DGwfo",
  authDomain: "kumar-photogallery.firebaseapp.com",
  projectId: "kumar-photogallery",
  storageBucket: "kumar-photogallery.appspot.com",
  messagingSenderId: "594889961776",
  appId: "1:594889961776:web:116f593a1d5717734198f5",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const projectStorage = firebase.storage();
export const projectFireStore = firebase.firestore();
export const timestamp = firebase.firestore.FieldValue.serverTimestamp;
