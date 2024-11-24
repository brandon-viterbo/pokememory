import { useState } from 'react'
import './styles/App.css'
import Header from './components/Header'
import fetchRandomArrOfPokemon from './fetchRandonArrOfPokemon'

const pokemon = await fetchRandomArrOfPokemon(3);

function App() {

  console.log(pokemon)

  return (
    <Header />
  )
}

export default App
