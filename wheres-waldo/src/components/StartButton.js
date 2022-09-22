import React from 'react'
import './StartButton.css'

export const StartButton = () => {
    return(
        <button id='Start' onClick={startButton}>Start</button>
    )
}

let startTime = 0

const startButton = () => {
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
        GetScore(score)
    }
}

export function GetScore(score) {
    return score
}