import React from 'react'
import "./CharacterSelection.css"
import ClickOnCharacterDiv from './ClickOnCharacter'
import { PlayerClicksOnCharacterName } from './ClickOnCharacter.js'

export const CharacterSelection = () => {
    return(
        <div id='CharacterSelector'>
            <p className='Grimes' onClick={ClickOnCharacterDiv}>Frank Grimes</p>
            <p className='Moe' onClick={ClickOnCharacterDiv}>Moe Szyslak</p>
            <p className='Poochie' onClick={ClickOnCharacterDiv}>Poochie</p>
        </div>
    )
}