import React from 'react'
import { ClickOnImage  } from './ClickOnImage'

export function IsPlayerChoiceCorrect(characterName){
    console.log(characterName)
    let box = document.getElementById(characterName)
    if (box.classList.contains('active')){
        console.log('Woohoo!')
    }else{
        console.log("D'oh!")
    }
}

export const PlayerClicksOnCharacterName = (e) => {
    let character = e.target.className
    IsPlayerChoiceCorrect(character)
}

export default function ClickOnCharacterDiv(e) {
    let box = document.getElementById('CharacterSelector')
    box.style.visibility = 'visible'
    box.style.left = e.pageX + 'px'
    box.style.top = e.pageY + 'px'
    console.log(e.target)
    e.target.classList.add('active')
}