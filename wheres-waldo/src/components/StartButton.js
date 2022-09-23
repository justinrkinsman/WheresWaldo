import React from 'react'
import './StartButton.css'
import { startButton } from './FinalScore'

export const StartButton = () => {
    return(
        <button id='Start' onClick={startButton}>Start</button>
    )
}

