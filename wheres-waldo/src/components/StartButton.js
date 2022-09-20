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
        document.getElementById('Start').style.display = 'inline'
        document.getElementById('Start').textContent = `Congratulations! Your final time is: ${Math.round((score / 1000) * 100) / 100} seconds`
    }
}