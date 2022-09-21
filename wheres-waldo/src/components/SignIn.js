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
        <div id='ProfileBox'>
            <div id='ProfilePic'/><div/>
            <button id='SignOut' onClick={props.signOutFunction}>
                Sign-out
            </button>
        </div>
    )
}