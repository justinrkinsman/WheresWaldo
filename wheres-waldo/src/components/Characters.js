import { CharacterCards } from "./CharacterCards";
import React from 'react'
import Grimes from '../images/grimes.jpg'
import Moe from '../images/moe.jpg'
import Poochie from '../images/poochie.jpg'
import './Characters.css'

export const Characters = () => {
    return (
        <div className='characterHeader'>
            <p>Find these characters</p>
            <div className="charactersToFind">
                <CharacterCards source={Grimes} alt={'Frank Grimes'}/>
                <CharacterCards source={Moe} alt={'Moe Szyslak'}/>
                <CharacterCards source={Poochie} alt={'Poochie'}/>
            </div>
        </div>
    )
}