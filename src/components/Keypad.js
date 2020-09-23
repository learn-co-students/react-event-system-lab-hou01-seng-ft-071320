// Code Keypad Component Here
import React from 'react';
import ReactDOM from 'react-dom';

class Keypad extends React.Component{
    render(){
        return(
            <input type="password" onKeyUp={()=>console.log('Entering password...')}/>
        )
    }
}
export default Keypad