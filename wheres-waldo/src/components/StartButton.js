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
    console.log(startTime)
}

const gameOver = () => {
    //when all characters are clicked, add a class to characterSelector (e.g. winner)
    //this function will look at characterSelector to determine if class is winner
    //if it is return loser
    //if not start over until className is winner then return winner
    //in startTime, if return winner, let endTime = performance.now()
    //let totalTime = endTime - startTime
    //total time is player's score
}