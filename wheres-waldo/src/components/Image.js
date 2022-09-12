import React from 'react'
import Simpsons from '../images/simpsons.jpg'
import { ClickOnImage } from './ClickOnImage'

export const Image = () => {
    return (
    <>
        <img src={Simpsons} alt='Simpsons Characters' className='collage' id='poster' onClick={ClickOnImage}></img>
    </>
    )
}