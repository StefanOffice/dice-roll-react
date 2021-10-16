import React, { Component } from 'react';
import './RollDice.css';

import Die from './Die';

class RollDice extends Component {

    static defaultProps = {
        sides: ['one', 'two', 'three', 'four', 'five', 'six']
    }

    constructor(props) {
        super(props);
        this.state = {
            die1: 'one',
            die2: 'one',
            isRolling: false
        }
        this.rollDice = this.rollDice.bind(this);
    }


    rollDice() {
        const { sides } = this.props;
        const num1 = Math.floor(Math.random() * sides.length);
        const num2 = Math.floor(Math.random() * sides.length);
        this.setState({ 
            die1: sides[num1], 
            die2: sides[num2], 
            isRolling:true });
        
        setTimeout(()=> {
            this.setState({isRolling:false});
        },1000);
    }

    render() {
        const { isRolling, die1, die2 } = this.state;

        return (
            <div className='RollDice'>
                <div>
                    <Die face={die1} isRolling={isRolling} />
                    <Die face={die2} isRolling={isRolling} />
                </div>
                <button onClick={this.rollDice} 
                    disabled = {isRolling ? true : false}>
                    {isRolling ? 'Rolling...' : 'Roll Dice!'}
                </button>

            </div>
        )
    }
}

export default RollDice;