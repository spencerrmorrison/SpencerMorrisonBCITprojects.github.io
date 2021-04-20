//---------------------------------------------------------------------
// Your web app's Firebase configuration;
// Specifies which firebase project your application is connected with.
//---------------------------------------------------------------------

var firebaseConfig = {
  apiKey: "AIzaSyALGIfZcFg1SOIshoxW8Z1_eUxEkXKD1KA",
  authDomain: "shoptimiser-aaee5.firebaseapp.com",
  databaseURL: "https://shoptimiser-aaee5.firebaseio.com",
  projectId: "shoptimiser-aaee5",
  storageBucket: "shoptimiser-aaee5.appspot.com",
  messagingSenderId: "487759359315",
  appId: "1:487759359315:web:398aeea2c1f8373a1045a6"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// Create the Firestore database object
// Henceforce, any reference to the database can be made with "db"
const db = firebase.firestore();