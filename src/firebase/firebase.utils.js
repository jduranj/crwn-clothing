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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }
    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;