const noOfPokemon = 1025;

async function fetchOneRandomPokemon(minId=1, maxId=noOfPokemon) {
  const baseUrl = 'https://pokeapi.co/api/v2/pokemon/';
  const randomId = Math.floor(Math.random() * (maxId - minId) + minId);
  const response = await fetch(`${baseUrl}${randomId}/`);
  let pokemonJson = {};

  if (!response.ok) {
    return null;
  } else {
    pokemonJson = await response.json();
    return pokemonJson;
  }
}

async function fetchRandomArrOfPokemon(sizeOfSet) {
  const pokemon = [];

  while (pokemon.length < sizeOfSet) {
    let thisPokemon = await fetchOneRandomPokemon();

    if (thisPokemon !== null) {
      pokemon.push({
        id: thisPokemon.id,
        name: thisPokemon.name,
        imageUrl: thisPokemon.sprites.other.home.front_default,
      });
    }
  }

  return pokemon;
}

export default fetchRandomArrOfPokemon;