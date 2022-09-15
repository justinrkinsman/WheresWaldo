import React from 'react'
import './Result.css'

export function DisplayResults(result) {
    let resultDiv = document.getElementById('Result')
    resultDiv.style.display = "inline"
    if (result === 'correct'){
        resultDiv.textContent = 'Woohoo!'
        setTimeout(hideResults, 3000)
    }else if (result === 'incorrect'){
        resultDiv.textContent = "D'oh!"
        setTimeout(hideResults, 3000)
    }
}

function hideResults() {
    let resultDiv = document.getElementById('Result')
    resultDiv.style.display = 'none'
}

export const Result = () => {
    return(
        <div id='Result'>
            
        </div>
    )
}