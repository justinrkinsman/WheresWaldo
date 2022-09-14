import React from 'react'
import "./CharacterSelection.css"
import { PlayerClicksOnCharacterName } from './ClickOnCharacter.js'

export const CharacterSelection = () => {
    return(
        <div id='CharacterSelector'>
            <p className='Grimes' onClick={PlayerClicksOnCharacterName}>Frank Grimes</p>
            <p className='Moe' onClick={PlayerClicksOnCharacterName}>Moe Szyslak</p>
            <p className='Poochie' onClick={PlayerClicksOnCharacterName}>Poochie</p>
        </div>
    )
}