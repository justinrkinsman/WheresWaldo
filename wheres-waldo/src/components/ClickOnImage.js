//Determine if character selector is open
const IsCharacterSelectorOpen = () => {
    if (document.getElementById('CharacterSelector') === null) {
        OpenCharacterSelector()
    }else{
        CloseCharacterSelector()
    }
}

//If character selector is closed:
const OpenCharacterSelector = () => {
    console.log('Open')
}

//If character selector is open
const CloseCharacterSelector = () => {
    console.log('Close')
}

export const ClickOnImage = e => {
    IsCharacterSelectorOpen()
}