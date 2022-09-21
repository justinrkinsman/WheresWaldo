import React from 'react'
import './SignIn.css'

export const SignIn = (props) => {
    return (
        <button id='SignIn' onClick={props.signInFunction}>
            Sign-In
        </button>
    )
}

export function SignOut(props) {
    return (
        <button id='SignOut' onClick={props.signOutFunction}>
            Sign-out
        </button>
    )
}