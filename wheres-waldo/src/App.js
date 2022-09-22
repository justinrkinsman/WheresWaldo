import React from 'react'
import './App.css';
import { Image } from './components/Image'
import { Characters } from './components/Characters';
import { CharacterSelection } from './components/CharacterSelection';
import { Result } from './components/Result'
import { StartButton, GetScore } from './components/StartButton';
import { SignIn, SignOut } from './components/SignIn'
import { FinalScore } from './components/FinalScore';

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
import { getSelectionRange } from '@testing-library/user-event/dist/utils';

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

onAuthStateChanged(auth, user => {
  if (user){
    let username = getAuth()
    console.log(`You are logged in as ${username.currentUser.displayName}`)
  }else{
    console.log('Logged off')
  }
})

/*const getProfilePicUrl = () => {
  return getAuth().currentUser.photoURL || '/images/profile_placeholder.png';
}

let profilePicUrl = getProfilePicUrl()*/

async function signIn(e) {
  let provider = new GoogleAuthProvider();
  await signInWithPopup(getAuth(), provider)
  e.target.style.visibility = 'hidden'
  document.getElementById('SignOut').style.visibility = 'visible'
  console.log(getAuth())
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

async function saveHighScore() {
  // Add a new score to the Firebase database.
  let username = getAuth()
  try {
   await addDoc(collection(getFirestore(), 'scores'), {
     name: username.currentUser.displayName,
     score: `${GetScore()} seconds`,
     timestamp: serverTimestamp()
   });
 }
 catch(error) {
   console.error('Error writing new message to Firebase Database', error);
 }
}

function App() {
  return (
    <div id='Main'>
        <Characters />
        <Result />
        <Image />
        <CharacterSelection />
        <StartButton />
        <FinalScore score={saveHighScore}/>
        <SignIn signInFunction={signIn} />
        <SignOut signOutFunction={signOutUser} /*pic={profilePicUrl}*//>
    </div>
  );
}

export default App;