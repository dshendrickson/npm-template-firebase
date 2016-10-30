import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyBh6FLD9HdBu_pmrFEvyh2aNrf48FYuYa8",
  authDomain: "npm-template.firebaseapp.com",
  databaseURL: "https://npm-template.firebaseio.com",
  storageBucket: "npm-template.appspot.com",
  messagingSenderId: "456795532311"
   };

firebase.initializeApp(config);

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export default firebase;
export const signIn = () => auth.signInWithPopup(provider);
export const signOut = () => auth.signOut();
export const reference = firebase.database().ref('npm-template-firebase');
