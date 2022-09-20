import { DisplayResults } from './Result'
import { gameOver } from './StartButton'

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
    AddClassNameToCharacterSelector()
}

function AddClassNameToCharacterSelector() {
    let characterSelector = document.getElementById('CharacterSelector')
    let grimes = document.getElementsByClassName('Grimes')
    let moe = document.getElementsByClassName('Moe')
    let poochie = document.getElementsByClassName('Poochie')
    if (grimes[0].style.display === 'none' && moe[0].style.display === 'none' && poochie[0].style.display === 'none'){
        characterSelector.classList.add('winner')
        gameOver()
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