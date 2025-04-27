import { useState } from 'react'
import { nanoid } from 'nanoid'
import { Die } from './Die.jsx'
import "../styles/main.css"

export function Main() {
    const generateRandomDice = () => {
        const dice = [];
        for (let i = 0; i < 10; i++) {
            dice.push({
                value: Math.floor(Math.random() * 6) + 1,
                selected: false,
                id: nanoid()
            });
        }
        return dice;
    }

    const [dice, setDice] = useState(generateRandomDice());

    const diceElements = dice.map(die => <Die key={die.id} value={die.value} />);

    const updateDice = () => {
        const newDice = dice.map(die => {
            if (die.selected) {
                return {value: die.value, selected: true, id: die.id};
            } else {
                return {
                    value: Math.floor(Math.random() * 6) + 1,
                    selected: false,
                    id: nanoid()
                }
            }
        })
        setDice(newDice);
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