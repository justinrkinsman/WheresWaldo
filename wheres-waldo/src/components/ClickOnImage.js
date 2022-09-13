//Determine if character selector is open
const IsCharacterSelectorOpen = (e) => {
    let box = document.getElementById('CharacterSelector')
    if (box.style.visibility === 'hidden') {
        OpenCharacterSelector(e)
    }else{
        CloseCharacterSelector(e)
    }
}

//If character selector is closed:
const OpenCharacterSelector = (e) => {
    let box = document.getElementById('CharacterSelector')
    box.style.visibility = 'visible'
}

//If character selector is open
const CloseCharacterSelector = (e) => {
    let box = document.getElementById('CharacterSelector')
    box.style.visibility = 'hidden'
}

export const ClickOnImage = e => {
    IsCharacterSelectorOpen(e)
}