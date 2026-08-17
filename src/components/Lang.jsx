import "./Lang.css"

function Lang(props){
    // console.log(props)
    return (
        <>
            <div className="lang" style={props.style}>{props.name}</div>
        </>
    )
} 

export default Lang