import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyB5W99m3TSR8RdHqF3_ZeGvL1K50mT3Ayw",
    authDomain: "companysite-f4b4c.firebaseapp.com",
    projectId: "companysite-f4b4c",
    storageBucket: "companysite-f4b4c.appspot.com",
    messagingSenderId: "760732641619",
    appId: "1:760732641619:web:12eb19be2ede31870b19a6",
    measurementId: "G-HQ6PQKNGJ2",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({timestampsInSnapshots : true});

export default firebase;