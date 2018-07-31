import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const prodConfig = {
    apiKey: "AIzaSyAsSgY3gO78AN0tc5cuZbBdfe6_GJFjyNc",
    authDomain: "code-mon.firebaseapp.com", databaseURL: "https://code-mon.firebaseio.com/", projectId: "code-mon", storageBucket: "code-mon.appspot.com", messagingSenderId: "916710828647"
};

const devConfig = {
    apiKey: "AIzaSyAsSgY3gO78AN0tc5cuZbBdfe6_GJFjyNc", authDomain: "code-mon.firebaseapp.com", databaseURL: "https://code-mon.firebaseio.com/", projectId: "code-mon", storageBucket: "code-mon.appspot.com", messagingSenderId: "916710828647"
};

const config = process.env.NODE_ENV === 'production'
  ? prodConfig
  : devConfig;

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const db = firebase.database();
const auth = firebase.auth();

export {
  db,
  auth,
};
