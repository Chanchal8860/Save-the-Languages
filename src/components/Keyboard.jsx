import { useState } from "react"
import "./Keyboard.css"
import {clsx} from "clsx"

function Keyboard(props){
    const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

    const keyElem = alphabets.split("").map(key => {
        const isGuessed = props.guessedLetters.includes(key)
        const isCorrect = isGuessed && props.currentWord.includes(key)
        const isWrong = isGuessed && !props.currentWord.includes(key)
        const classes = clsx(
            "key",
            {
                correct : isCorrect,
                wrong : isWrong
        })
            return(
                <button 
                    className={classes}
                    key={key} 
                    onClick={()=>props.setLetter(key)}
                    disabled = {props.isGameOver}
                    aria-disabled ={props.guessedLetters.includes(key)}
                    aria-label={`letter ${key}`}
                >
                    {key}
                </button>
            )}
        )

    return (
        <>
            <section className="board">
                <section className="keyboard">
                    {keyElem}
                </section>
                {props.isGameOver ?<button className="new-game-btn" onClick={props.startNewGame}>New Game</button> : undefined}
            </section>
        </>
    )
}

export default Keyboard