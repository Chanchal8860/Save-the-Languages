import "./Letter.css"

function Letter(props){
    return(
        <>
            <div className="letter-box">
                <span style={{opacity:(props.isShown? 100 : 0)}} className="letter">{props.value}</span>
            </div>
        </>
    )
}

export default Letter