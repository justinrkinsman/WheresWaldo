import React from 'react'
import './StartButton.css'
import { getAuth } from 'firebase/auth'
import { addDoc, serverTimestamp, collection, getFirestore } from 'firebase/firestore'

//add text using function that makes it visible textcontent = `${score}`
export const FinalScore = (props) => {
    return (
        <button id='Score'>
        </button>
    )
}

let startTime = 0

export function startButton() {
    document.getElementById('Start').style.display = 'none'
    startTimer()
}

const startTimer = () => {
    startTime = performance.now()
}

export const gameOver = () => {
    let characterSelector = document.getElementById('CharacterSelector')
    if (characterSelector.classList.contains('winner')){
        let stopTimer = performance.now()
        let scoreInMilliseconds = stopTimer - startTime
        let score = Math.round((scoreInMilliseconds / 1000) * 100) / 100
        document.getElementById('Score').style.visibility = 'visible'
        document.getElementById('Score').textContent = `Congratulations! Your final time is: ${score} seconds`
        saveHighScore(score)
    }
}

async function saveHighScore(score) {
    // Add a new score to the Firebase database.
    let username = getAuth()
    try {
     await addDoc(collection(getFirestore(), 'scores'), {
       name: username.currentUser.displayName,
       score: `${score} seconds`,
       timestamp: serverTimestamp()
     });
   }
   catch(error) {
     console.error('Error writing new message to Firebase Database', error);
   }
  }