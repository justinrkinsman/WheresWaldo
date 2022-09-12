import React from 'react'
import './CharacterCards.css'

export const CharacterCards = (props) => {
    return(
        <>
            <img src={props.source} alt={props.alt} className='characterDisplay'></img>
        </>
    )
}