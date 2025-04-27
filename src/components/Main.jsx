import { useState } from 'react'
import { Die } from './Die.jsx'
import "../styles/main.css"

export function Main() {
    const generateRandomDice = () => {
        const dice = [];
        for (let i = 0; i < 10; i++) {
            dice.push(Math.floor(Math.random() * 6) + 1);
        }
        return dice;
    }

    const [dice, setDice] = useState(generateRandomDice());

    const diceElements = dice.map(value => <Die value={value} />);

    const updateDice = () => {
        setDice(generateRandomDice());
    }
    
    return (
        <main className="main">
            <div className='dice-container'>
                {diceElements}
            </div>
            <button className='roll-button' onClick={updateDice}>Roll</button>
        </main>
    )
}