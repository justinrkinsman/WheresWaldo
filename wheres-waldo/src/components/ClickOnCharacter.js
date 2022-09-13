import React from 'react'

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
    e.target.classList.add('active')
}