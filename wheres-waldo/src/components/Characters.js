import { CharacterCards } from "./CharacterCards";
import React from 'react'
import Grimes from '../images/grimes.jpg'
import Moe from '../images/moe.jpg'
import Poochie from '../images/poochie.jpg'

export const Characters = () => {
    return (
        <>
            <CharacterCards source={Grimes} alt={'Frank Grimes'}/>
            <CharacterCards source={Moe} alt={'Moe Szyslak'}/>
            <CharacterCards source={Poochie} alt={'Poochie'}/>
        </>
    )
}