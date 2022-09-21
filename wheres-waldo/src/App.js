import React from 'react'
import './App.css';
import { Image } from './components/Image'
import { Characters } from './components/Characters';
import { CharacterSelection } from './components/CharacterSelection';
import { Result } from './components/Result'
import { StartButton } from './components/StartButton';
import { SignIn, SignOut } from './components/SignIn'

import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'

import { useAuthState } from 'react-firebase-hooks/auth'
import { useCollectionData } from 'react-firebase-hooks/firestore'

import { initializeApp } from 'firebase/app';
import {
  getAuth,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import {
  getFirestore,
  collection,
  addDoc,
  query,
  orderBy,
  limit,
  onSnapshot,
  setDoc,
  updateDoc,
  doc,
  serverTimestamp,
} from 'firebase/firestore';
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from 'firebase/storage';
import { getMessaging, getToken, onMessage } from 'firebase/messaging';
import { getPerformance } from 'firebase/performance';

firebase.initializeApp({
  apiKey: "AIzaSyDWSX8mJCGRCGTya6fNJ5TOoutOHoXqZ9I",
  authDomain: "where-swaldo-eb0d8.firebaseapp.com",
  projectId: "where-swaldo-eb0d8",
  storageBucket: "where-swaldo-eb0d8.appspot.com",
  messagingSenderId: "737753416238",
  appId: "1:737753416238:web:bb5f22c4200bca34a8d5bf"
})

const auth = firebase.auth()
const firestore = firebase.firestore()

/*onAuthStateChanged(auth, user => {
  console.log(`You are logged in as ${user}`)
})

signInWithPopup(auth, new GoogleAuthProvider())*/

async function signIn(e) {
  let provider = new GoogleAuthProvider();
  await signInWithPopup(getAuth(), provider)
  e.target.style.visibility = 'hidden'
  document.getElementById('SignOut').style.visibility = 'visible'
}

function signOutUser(e) {
  // Sign out of Firebase.
  signOut(getAuth());
  e.target.style.visibility = "hidden"
  document.getElementById('SignIn').style.visibility = 'visible'
}

/*let signInButton = document.getElementById('SignIn')
signInButton.addEventListener('click', signIn)*/
//const db = getFirestore(app)

//const boatRef = doc(db, )

function App() {
  return (
    <div id='Main'>
        <Characters />
        <Result />
        <Image />
        <CharacterSelection />
        <StartButton />
        <SignIn signInFunction={signIn} />
        <SignOut signOutFunction={signOutUser} />
    </div>
  );
}

export default App;
