import firebase from 'firebase/app'
import 'firebase/firestore'
var firebaseConfig = {
  apiKey: "AIzaSyAPbOmsG1ndMk5sTTjp1Apckt_-BSBrHZg",
  authDomain: "proyectofinal-b94cb.firebaseapp.com",
  databaseURL: "https://proyectofinal-b94cb.firebaseio.com",
  projectId: "proyectofinal-b94cb",
  storageBucket: "proyectofinal-b94cb.appspot.com",
  messagingSenderId: "576671394024",
  appId: "1:576671394024:web:10ac1bd932f63655a0015d",
  measurementId: "G-YZ47QSFDFC"
};

// Get a Firestore instance
export const db = firebase
  .initializeApp(firebaseConfig)
  .firestore()

// Export types that exists in Firestore
// This is not always necessary, but it's used in other examples
const { Timestamp, GeoPoint } = firebase.firestore
export { Timestamp, GeoPoint }


// if using Firebase JS SDK < 5.8.0
//db.settings({ timestampsInSnapshots: true })