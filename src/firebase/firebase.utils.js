import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyCjpg0JkRXPYQLBAvDfbwEdnmowX-IqdNE",
    authDomain: "ecom-web-61e7e.firebaseapp.com",
    projectId: "ecom-web-61e7e",
    storageBucket: "ecom-web-61e7e.appspot.com",
    messagingSenderId: "277865145274",
    appId: "1:277865145274:web:d51ef5d8d8c5cd58b9f383",
    measurementId: "G-S75ZJXYFTF"
  };

export const createUserProfileDocument = async (userAuth, adittionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapshot = await userRef.get();

  if(!snapshot.exists) {
    const { email, displayName } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        createdAt,
        displayName,
        email,
        ...adittionalData
      })
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
}

firebase.initializeApp(config);

export const firestore = firebase.firestore();
export const auth = firebase.auth();
//const storage =firebase.storage();



const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account' });
export const SignInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;