import React from 'react'
import Simpsons from '../images/simpsons.jpg'
import { ClickOnImage  } from './ClickOnImage'
import './Image.css'

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
        <div id='Grimes' onClick={ClickOnImage}></div>
        <div id='Moe' onClick={ClickOnImage}></div>
        <div id='Poochie' onClick={ClickOnImage}></div>
    </>
    )
}