import React from 'react'
import './StartButton.css'

export const StartButton = () => {
    return(
        <button id='Start' onClick={startTimer}>Start</button>
    )
}

const startTimer = (e) => {
    e.target.style.display = 'none'
    let startTime = performance.now()
    gameOver()
    let endTime = performance.now()
    let totalTime = endTime - startTime
    console.log(`Your total time was: ${totalTime}`)
}

export function gameOver() {
    let characterSelector = document.getElementById('CharacterSelector')
    if (characterSelector.classList.contains('winner')){
        return 'winner'
    }else{
        return 'loser'
    }
    //in startTime, if return winner, let endTime = performance.now()
    //let totalTime = endTime - startTime
    //total time is player's score
}