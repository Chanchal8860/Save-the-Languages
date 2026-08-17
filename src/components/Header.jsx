import "./Header.css"

function Header(){
    return(
        <>
            <h1 className="game-name">Save the Languages</h1>
            <p className="hint-block">Guess the word in under 8 attempts to keep the programming world safe from Assembly!</p>
            <section className="game-status">
                <h2>You win!</h2>
                <p>Well done! 🎉</p>
            </section>
        </>
    )
}

export default Header