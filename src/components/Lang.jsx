import "./Lang.css"
import {clsx} from "clsx"

function Lang(props){
    // console.log(props)
    const classes = clsx(
        "lang",
        {lost : props.isLost}
    )
    return (
        <>
            <div className={classes} style={props.style}>{props.name}</div>
        </>
    )
} 

export default Lang