import { useState } from "react"
import "./Keyboard.css"
import {clsx} from "clsx"

function Keyboard(props){
    const [keyArray,setKeyArray] = useState("ABCDEFGHIJKLMNOPQRSTUVWXYZ")

    const keyElem = keyArray.split("").map(key => {
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
                >
                    {key}
                </button>
            )}
        )

    function addGuess(){

    }

    return (
        <>
            <section className="board">
                <section className="keyboard">
                    {keyElem}
                </section>
                <button className="new-game-btn" >New Game</button>
            </section>
        </>
    )
}

export default Keyboard