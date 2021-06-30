import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyACnilqvIZl2hxd3BBD0pc0YcVNebB3g9M",
  authDomain: "disneyplus-clone-ba5eb.firebaseapp.com",
  projectId: "disneyplus-clone-ba5eb",
  storageBucket: "disneyplus-clone-ba5eb.appspot.com",
  messagingSenderId: "425251383945",
  appId: "1:425251383945:web:d19d6ca5be319733fa3458",
  measurementId: "G-CP4PTCREMP",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
