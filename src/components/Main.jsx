import Keyboard from "./Keyboard"
import Letter from "./Letter"
import Lang from "./Lang"
import {languages} from "../languages"
import "./Main.css"
import { useState } from "react"

function Main(){
    const [guessedLetters, setGuessedLetters] = useState([])

    const [progLangArray,setProgLangArray] = useState(languages)

    const word = String("react").toUpperCase()

    const [currentWord,setCurrentword] = useState(word)
    
    const langElem = progLangArray.map(key => <Lang key={key.name} name= {key.name} style={key.style}/>)

    const wordElem = currentWord.split("").map((letter,index) => <Letter key = {index} value = {letter} isShown = {guessedLetters.includes(letter) ? true :false}/>)

    function addGuessedLetter(guessedLetter){
        setGuessedLetters(prevArray => 
            prevArray.includes(guessedLetter) ? prevArray : [...prevArray,guessedLetter])
    }

    console.log(guessedLetters)
    console.log(currentWord)

    return (
        <>
            <div className="language-box">
                {langElem}
            </div>
            <section className="word-section">
                {wordElem}
            </section>

            <section className="keyboard-section">
                <Keyboard setLetter = {addGuessedLetter} currentWord = {currentWord} guessedLetters = {guessedLetters}  />
            </section>
        </>
    )
}

export default Main