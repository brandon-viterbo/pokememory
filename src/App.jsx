import { useState, useEffect } from 'react'
import './styles/App.css'
import Header from './components/Header'
import Gameboard from './components/Gameboard'
import fetchRandomArrOfPokemon from './fetchRandonArrOfPokemon'

let didInit = false;

function shuffleArray(arr) {
  let shuffled = arr
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)

  return shuffled;
}

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [score, setScore] = useState(0);
  const [best, setBest] = useState(0);
  
  useEffect(() => {
    if (!didInit) {
      didInit = true;
      fetchRandomArrOfPokemon(12)
      .then(response => {setPokemon(response)}); 
    }
  }, []);

  if (score > best) {
    setBest(score);
  }
  
  function handleScore(e) {
    const target = e.currentTarget;

    if (target.className === 'unclicked') {
      setScore(score + 1);
      target.className = 'clicked'
    } else if (target.className === 'clicked') {
      setScore(0);

      Array.from(target.parentElement.children)
        .map(card => card.className = 'unclicked');
    }

    setPokemon(shuffleArray(pokemon));
  }

  return (
    <>
      <Header score={score} best={best} />
      <Gameboard pokemon={pokemon} handleScore={handleScore} />
    </>
  )
}

export default App
