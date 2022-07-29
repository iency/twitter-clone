import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDT0zghCnAwhaftI5zfkqlXcA2hTSTjOj4",
  authDomain: "twitter-clone-9346a.firebaseapp.com",
  projectId: "twitter-clone-9346a",
  storageBucket: "twitter-clone-9346a.appspot.com",
  messagingSenderId: "489410872236",
  appId: "1:489410872236:web:2fcc04251b203c78f2b009"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;