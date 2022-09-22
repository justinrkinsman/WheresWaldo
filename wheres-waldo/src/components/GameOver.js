import React from 'react'

let startTime = 0

export const gameOver = () => {
    let characterSelector = document.getElementById('CharacterSelector')
    if (characterSelector.classList.contains('winner')){
        let stopTimer = performance.now()
        let scoreInMilliseconds = stopTimer - startTime
        let score = Math.round((scoreInMilliseconds / 1000) * 100) / 100
        document.getElementById('Start').style.display = 'inline'
        document.getElementById('Start').textContent = `Congratulations! Your final time is: ${score} seconds`
        GetScore(score)
    }
}

export function GetScore(score) {
    return score
}