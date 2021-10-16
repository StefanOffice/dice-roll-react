import React, { Component } from 'react';
import './Die.css';

class Die extends Component {
    render(){
        const { face, isRolling } = this.props;
        const animation = isRolling ? 'wobbleDice' : ''; 
        return (
            <i class={`Die fas fa-dice-${face} ${animation}`}></i>
        )
    }
}

export default Die;