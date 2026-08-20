import Keyboard from "./Keyboard"
import Letter from "./Letter"
import Lang from "./Lang"
import {languages} from "../languages"
import "./Main.css"
import { useState } from "react"
import {clsx} from "clsx"
import { getFarewellText } from "../farewellMessage"
import { words } from "../words"

function Main(){
    

    const [guessedLetters, setGuessedLetters] = useState([])

    // const [progLangArray,setProgLangArray] = useState(languages)

    const [currentWord,setCurrentword] = useState(()=>getRandomWord())
    
    const wrongGuessArray = guessedLetters.filter(letter => !currentWord.includes(letter))
    const wrongGuessCount = wrongGuessArray.length

    // console.log(wrongGuessArray)
    // console.log(wrongGuessCount)

    const isGameLost = (wrongGuessCount >=languages.length-1 ? true:false) 
    // console.log(isGameOver)

    const isGameWon = currentWord.split("").every(letter => guessedLetters.includes(letter))

    const isGameOver = isGameLost || isGameWon

    console.log(isGameWon)

    const langElem = languages.map((key,index) => <Lang key={key.name} name= {key.name} style={key.style} isLost = {(index+1)<=wrongGuessCount ? true:false}/>)

    const wordElem = currentWord.split("").map((letter,index) => <Letter key = {index} value = {letter} isShown = {guessedLetters.includes(letter) ? true :false}/>)

    function addGuessedLetter(guessedLetter){
        setGuessedLetters(prevArray => 
            prevArray.includes(guessedLetter) ? prevArray : [...prevArray,guessedLetter])
    }

    console.log(guessedLetters)
    console.log(currentWord)

    
    const lastGuessedLetter = guessedLetters[guessedLetters.length-1]
    const isLastGuessedIncorrect = lastGuessedLetter && !currentWord.includes(lastGuessedLetter)
    
    const gameStatusClasses = clsx(
        "game-status",
        {
            "game-won" : isGameWon,
            "game-lost" : isGameLost,
            "farewell" : !isGameOver && isLastGuessedIncorrect
        }
    )
    // console.log({getFarewellText("css")})

    function getRandomWord(){
        const randomNumber = Math.floor(Math.random()*words.length)
        return String(words[randomNumber]).toUpperCase()
    }

    function renderGameStatus(){
        if (!isGameOver && isLastGuessedIncorrect){
            return <p className="farewell-message">{getFarewellText(languages[wrongGuessCount-1].name)}</p>
        }

        if (isGameWon){
            return (
                <>
                    <h2>You win!</h2>
                    <p>Well done! 🎉</p>
                </> 
            )
        }else if (isGameLost){
            return (
                <>
                    <h2>Game Over!</h2>
                    <p>You lose! Better start learning Assembly 😭</p>
                </>
            )
        }
        return null
    }

    function startNewGame(){
        setCurrentword(()=>getRandomWord())
        setGuessedLetters([])
    }

    return (
        <>
            <section aria-live="polite" className={gameStatusClasses}>
                {renderGameStatus()}
            </section>
            <div className="language-box">
                {langElem}
            </div>
            <section className="word-section">
                {wordElem}
            </section>

            <section className="keyboard-section">
                <Keyboard setLetter = {addGuessedLetter} currentWord = {currentWord} guessedLetters = {guessedLetters} isGameOver = {isGameOver} startNewGame = {startNewGame}/>
            </section>
        </>
    )
}

export default Main