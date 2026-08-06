import "./Lang.css"

function Lang(props){
    return (
        <>
            <div className="lang" style={props.style}>{props.value}</div>
        </>
    )
} 

export default Lang