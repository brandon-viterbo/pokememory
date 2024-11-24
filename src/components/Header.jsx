function Header({score=0, best=0}) {
  return(
    <header>
      <h1>Pokémemory</h1>
      <div className="scoreboard">
        <p className="score">Score: {score}</p>
        <p className="best">Best: {best}</p>
      </div>
    </header>
  )
}

export default Header;