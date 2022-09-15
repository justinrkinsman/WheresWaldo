import React from 'react'
import './Result.css'

export function DisplayResults(result) {
    if (result === 'correct'){
        console.log('Woohoo!')
    }else if (result === 'incorrect'){
        console.log("D'oh!")
    }
}

export const Result = () => {
    return(
        <div id='Result'>
            
        </div>
    )
}