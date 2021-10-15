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
            die2: 'one'
        }
        this.rollDice = this.rollDice.bind(this);
    }


    rollDice() {
        const { sides } = this.props;
        const num1 = Math.floor(Math.random() * sides.length);
        const num2 = Math.floor(Math.random() * sides.length);
        this.setState({ die1: sides[num1], die2: sides[num2] });
    }

    render() {
        const { die1, die2 } = this.state;

        return (
            <div className='RollDice'>
                <div>
                    <Die face={die1} />
                    <Die face={die2} />
                </div>
                <button onClick={this.rollDice}>Roll Dice!</button>

            </div>
        )
    }
}

export default RollDice;