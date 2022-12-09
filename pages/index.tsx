import { Layout } from "../components/layouts";
import { NavigationBar } from "../components/ui";
import { Pokemon } from "../interfaces";
import { Card, Grid, Row, Text } from '@nextui-org/react';
import {PokemonCard} from "../components/pokemons";

interface Props {
  pokemons: Pokemon[]
}

export default function HomePage({ pokemons }: Props) {

  console.log(pokemons)
  return (
    <Layout title="Listado de pokemons">
      <>
        <NavigationBar />
        <ul>
          {
            <Grid.Container gap={2} justify="flex-start">
              {pokemons.map((pokemon: Pokemon, index) => (
                <PokemonCard key={index} pokemon={pokemon} />
              ))}
            </Grid.Container>
          }
        </ul>
      </>
    </Layout>
  )
}

// You should use getStaticProps when:
//- The data required to render the page is available at build time ahead of a user’s request.
//- The data comes from a headless CMS.
//- The data can be publicly cached (not user-specific).
//- The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.
import { GetStaticProps, NextPage } from 'next'
import { pokeApi } from "../api";
import { PokemonsResponse } from '../interfaces';

export const getStaticProps: GetStaticProps = async (ctx) => {
  const pokemonsList: PokemonsResponse = await pokeApi()

  const pokemons: Pokemon[] = pokemonsList.results.map((pokemon, index) => ({
    ...pokemon,
    id: index + 1,
    img: `https://raw.githubusercontent.com/PokeApi/sprites/master/sprites/pokemon/other/dream-world/${index + 1}.svg`
  }))

  return {
    props: {
      pokemons
    }
  }
}
