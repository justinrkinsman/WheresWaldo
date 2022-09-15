import React from 'react'
import { ClickOnImage  } from './ClickOnImage'
import { IsCharacterSelectorOpen } from './ClickOnImage'
import { DisplayResults } from './Result'

export function IsPlayerChoiceCorrect(characterName){
    let box = document.getElementById(characterName)
    if (box.classList.contains('active')){
        DisplayResults('correct')
        let char = document.getElementsByClassName(characterName)
        char[0].style.display = 'none'
        let select = document.getElementById('CharacterSelector')
        select.style.visibility = 'hidden'
    }else{
        DisplayResults('incorrect')
    }
}

export const PlayerClicksOnCharacterName = (e) => {
    let character = e.target.className
    IsPlayerChoiceCorrect(character)
}

export default function ClickOnCharacterDiv(e) {
    let box = document.getElementById('CharacterSelector')
    e.target.classList.add('active')
    if (box.style.visibility === 'visible'){
        box.style.visibility = 'hidden'
    }else{
        box.style.visibility = 'visible'
        box.style.left = e.pageX + 'px'
        box.style.top = e.pageY + 'px'
    }
}