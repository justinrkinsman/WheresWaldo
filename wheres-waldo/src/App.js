import React from 'react'
import './App.css';
import { Image } from './components/Image'

import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'

import { useAuthState } from 'react-firebase-hooks/auth'
import { useCollectionData } from 'react-firebase-hooks/firestore'

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

function App() {
  return (
    <div>
        <Image />
    </div>
  );
}

export default App;
