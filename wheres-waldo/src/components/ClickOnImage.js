import React from 'react'
import { IsPlayerChoiceCorrect } from './ClickOnCharacter.js'

//Determine if character selector is open
export function IsCharacterSelectorOpen(e){
    let box = document.getElementById('CharacterSelector')
    if (box.style.visibility === 'hidden') {
        OpenCharacterSelector(e)
    }else{
        CloseCharacterSelector()
    }
}

//If character selector is closed:
const OpenCharacterSelector = (e) => {
    let box = document.getElementById('CharacterSelector')
    box.style.visibility = 'visible'
    box.style.left = e.pageX + 'px'
    box.style.top = e.pageY + 'px'
}

//If character selector is open
const CloseCharacterSelector = () => {
    let box = document.getElementById('CharacterSelector')
    let char = document.getElementsByClassName('active')
    box.style.visibility = 'hidden'
    if(char[0]){
        char[0].classList.remove('active')
    }
}

export const ClickOnImage = (e) => {
    IsCharacterSelectorOpen(e)
    if (e.target.id !== 'poster'){
        IsPlayerChoiceCorrect(e.target.id)
    }
}