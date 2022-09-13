import React from 'react'
import Simpsons from '../images/simpsons.jpg'
import { ClickOnImage } from './ClickOnImage'
import './Image.css'

function grimes() {
    console.log('Frank Grimes')
}

function moe() {
    console.log('Moe')
}

function poochie() {
    console.log('Poochie')
}

export const Image = () => {
    return (
    <>
        <img 
            src={Simpsons} 
            alt='Simpsons Characters'  
            className='collage' 
            id='poster' 
            onClick={ClickOnImage}>
        </img>
        <div id='Grimes' onClick={grimes}></div>
        <div id='Moe' onClick={moe}></div>
        <div id='Poochie' onClick={poochie}></div>
    </>
    )
}