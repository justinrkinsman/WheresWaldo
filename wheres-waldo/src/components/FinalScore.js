import React from 'react'
import './StartButton.css'

export const FinalScore = (props) => {
    return (
        <button id='Score' onClick={props.score}>
            <p>Congratulations! Your final time is: [score] seconds</p>
        </button>
    )
}