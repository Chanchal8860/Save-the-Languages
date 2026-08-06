import Keyboard from "./Keyboard"
import Letter from "./Letter"
import Lang from "./Lang"
import "./Main.css"
import { useState } from "react"

function Main(){
    const newProgArray =[
        {value :"HTML", style : {backgroundColor : "#E2680F", color :"white"}} ,
        {value :"CSS", style : {backgroundColor : "#328AF1", color :"white"}},
        {value :"Javascriipt", style : {backgroundColor : "#F4EB13", color :"black"}} ,
        {value :"React", style : {backgroundColor : "#2ED3E9", color :"white"}},
        {value :"Typescript", style : {backgroundColor : "#298EC6", color :"white"}} ,
        {value :"Node.js", style : {backgroundColor : "#599137", color :"white"}},
        {value :"Python", style : {backgroundColor : "#FFD742", color :"black"}} ,
        {value :"Ruby", style : {backgroundColor : "#D02B2B", color :"white"}},
        {value :"Assembly", style : {backgroundColor : "#2D519F", color :"white"}}
    ]

    const emptyLetters = new Array(8).fill("")

    const [progLangArray,setProgLangArray] = useState(newProgArray)

    const [letterBoxes,setLetterBoxes] = useState(emptyLetters)
    
    const langElem = progLangArray.map(key => <Lang value= {key.value} style={key.style}/>)

    const letterBoxElems = letterBoxes.map(box => <Letter/>)

    return (
        <>
            <div className="language-box">
                {langElem}
            </div>
            <section className="letters-section">
                {letterBoxElems}
            </section>

            <section className="keyboard-section">
                <Keyboard/>
            </section>
        </>
    )
}

export default Main