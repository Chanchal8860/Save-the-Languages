import { useState } from "react"
import Key from "./Key"
import "./Keyboard.css"

function Keyboard(){
    const [keyArray,setKeyArray] = useState(() => generateNewKeyArray())

    function generateNewKeyArray(){
        return new Array(26).fill(0).map((_,index) => ({value : String.fromCharCode(65 + index)}))
    }
    console.log(keyArray)
    const keyElem = keyArray.map(key => <Key value = {key.value}/>)

    return (
        <>
            <section className="keyboard">
                {keyElem}
            </section>
        </>
    )
}

export default Keyboard