
const pokeApi = async () => {
  const data = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
  .then(response => response.json())
  return data
}


const pokemonApi = async (id: number) => {
  const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
  .then(response => response.json())
  return data
}

export {
  pokeApi,
  pokemonApi
}