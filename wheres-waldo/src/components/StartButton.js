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

export function gameOver() {
    let characterSelector = document.getElementById('CharacterSelector')
    if (characterSelector.classList.contains('winner')){
        let stopTimer = performance.now()
        let score = stopTimer - startTime
        console.log(stopTimer)
        console.log(startTime)
        console.log(score)
    }
}