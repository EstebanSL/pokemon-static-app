export interface PokemonsResponse {
  count: number,
  next: string,
  previous: number | null,
  results: Pokemon[]
}

export interface Pokemon {
  url: string,
  name: string,
  id: number,
  img: string
}