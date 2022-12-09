import { useRouter } from 'next/router'
import React from 'react'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { PokemonData } from '../../interfaces/pokemonData';
import { pokemonApi } from '../../api/pokeApi';

interface Props {
  pokemon: PokemonData
}

const PokemonPage: NextPage<Props> = ({pokemon}) => {

  const router = useRouter()

  console.log(router.query)

  return (
    <div>
      <h1>{ pokemon.name } - { pokemon.id }</h1>
    </div>
  )
}

export const getStaticPaths: GetStaticPaths = async (ctx) => {

  const pokemonsList = [...Array(151)].map((value, index) => `${index + 1}`)

  return {
    paths: pokemonsList.map((id) => ({
      params: { id }
    })),
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async (ctx) => {

  const { id } = ctx.params as { id: string }

  const pokemon: PokemonData = await pokemonApi(Number(id))

  return {
    props: {
      pokemon
    }
  }
}


export default PokemonPage
