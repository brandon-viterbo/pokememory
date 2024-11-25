import '../styles/Gameboard.css'

function Card({pokemon}) {
  return (
    <p className='card'>
      <img src={pokemon.imageUrl} alt='' />
      <strong>{pokemon.name}</strong>
    </p>
  )
}

function Gameboard({pokemon, handleScore}) {
  let cards = pokemon.map((thisPokemon) =>
    <li className="unclicked" key={thisPokemon.id} onClick={handleScore}>
      <Card pokemon={thisPokemon} />
    </li>
  );

  return(
    <ul className="gameboard">
      {cards}
    </ul>
  )
}

export default Gameboard;