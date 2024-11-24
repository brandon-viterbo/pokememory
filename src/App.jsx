import { useState, useEffect } from 'react'
import './styles/App.css'
import Header from './components/Header'
import Gameboard from './components/Gameboard'
import fetchRandomArrOfPokemon from './fetchRandonArrOfPokemon'

let didInit = false;

function App() {
  const [pokemon, setPokemon] = useState([]);

  function handleScore() {

  }

  useEffect(() => {
    if (!didInit) {
      didInit = true;
      fetchRandomArrOfPokemon(12)
        .then(response => {setPokemon(response)}); 
    }
  }, []);

  return (
    <>
      <Header />
      <Gameboard pokemon={pokemon} handleScore={handleScore} />
    </>
  )
}

export default App
