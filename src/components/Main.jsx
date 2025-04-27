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

    if(
        dice.every(die => die.selected) &&
        dice.every(die => die.value === dice[0].value)
    ) {
        console.log("a")
    }
    
    const rollDice = () => {
        const newDice = dice.map(die => {
            if (die.selected) {
                return { value: die.value, selected: true, id: die.id };
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

    const selectDie = (id) => {
        setDice(prevDice => (
            prevDice.map(die => (
                die.id === id ? { ...die, selected: !die.selected } : die
            ))
        ))
    }

    const diceElements = dice.map(die => (
        <Die
            key={die.id}
            id={die.id}
            value={die.value}
            selected={die.selected}
            selectDie={selectDie}
        />));

    return (
        <main className="main">
            <h3>Roll dice until all are same. Click on a die to select it and freeze it.</h3>
            <div className='dice-container'>
                {diceElements}
            </div>
            <button className='roll-button' onClick={rollDice}>Roll</button>
        </main>
    )
}