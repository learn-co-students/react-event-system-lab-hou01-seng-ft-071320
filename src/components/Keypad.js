// Code Keypad Component Here
import React from 'react'

export default class Keypad extends React.Component {
    
    status = () => console.log('Entering password...')

    render () {
        return (
            <input onKeyUp={this.status} type="password"></input>
        )
    }
}