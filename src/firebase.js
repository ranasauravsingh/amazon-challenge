import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyC6wkLewfpMV-dUuL69wI4jeEe-GEGpJGc",
  authDomain: "challenge-59f64.firebaseapp.com",
  projectId: "challenge-59f64",
  storageBucket: "challenge-59f64.appspot.com",
  messagingSenderId: "220756442658",
  appId: "1:220756442658:web:ef9962b3836c182997547b",
  measurementId: "G-32PD9DXS1Q",
});

const auth = firebase.auth();
export { auth };
