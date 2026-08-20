import "./Letter.css"
import { clsx } from "clsx"

function Letter(props){
    const letterClasses = clsx("letter", props.missedLetter && "missed-letter")
    return(
        <>
            <div className="letter-box">
                <span style={{opacity:(props.isShown? 100 : 0)}} className={letterClasses}>{props.value}</span>
            </div>
        </>
    )
}

export default Letter