function Card({pokemon}) {
  return (
    <>
      <p>
        <img src={pokemon.imageUrl} alt='' />
        <strong>{pokemon.name}</strong>
      </p>
    </>
  )
}

function Gameboard({pokemon, handleScore}) {
  const cards = pokemon.map((thisPokemon) =>
    <li className='card' key={thisPokemon.id} onClick={handleScore}>
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