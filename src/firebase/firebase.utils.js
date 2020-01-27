import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDGYTPGTXWlPCA6cy0RVg_cchI17W6KO_k",
    authDomain: "crwn-db-1ea2f.firebaseapp.com",
    databaseURL: "https://crwn-db-1ea2f.firebaseio.com",
    projectId: "crwn-db-1ea2f",
    storageBucket: "crwn-db-1ea2f.appspot.com",
    messagingSenderId: "343221886220",
    appId: "1:343221886220:web:37bdb83a24a32cc2d9fd29",
    measurementId: "G-Q8WXJF4546"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;