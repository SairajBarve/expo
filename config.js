import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {

    
        apiKey: "AIzaSyBa75F0gk5KO-sVgmS3h6Yf2Lp0t6dge1s",
        authDomain: "votingapp-15f2e.firebaseapp.com",
        projectId: "votingapp-15f2e",
        storageBucket: "votingapp-15f2e.appspot.com",
        messagingSenderId: "302945492231",
        appId: "1:302945492231:web:0e7c8bcf2062b4b937b9a2"
      };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();