import React from 'react'
import Simpsons from '../images/simpsons.jpg'
import { ClickOnImage } from './ClickOnImage'
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
        <div id='Grimes'></div>
        <div id='Moe'></div>
        <div id='Poochie'></div>
    </>
    )
}