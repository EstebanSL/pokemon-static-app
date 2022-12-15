import { useState } from 'react';

import { useRouter } from 'next/router'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';

import { Button, Card, Container, Grid, Image, Text } from '@nextui-org/react';

import { PokemonData } from '../../interfaces/pokemonData';
import { pokeApi, pokemonApi } from '../../api/pokeApi';
import { Layout } from '../../components/layouts';
import  { localFavorites } from '../../utils'

import confetti  from 'canvas-confetti'
import { Pokemon, PokemonsResponse } from '../../interfaces';

interface Props {
  pokemon: PokemonData
}

const PokemonPage: NextPage<Props> = ({pokemon}) => {

  const [isInFavorites, setIsfavorites] = useState( localFavorites.existInFavorites(pokemon.id) );

  const router = useRouter()

  const onToggleFavorites = (id: number) => {
    localFavorites.toggleFavorite(id)
    setIsfavorites(!isInFavorites)

    if (!isInFavorites) {
      confetti({
        zIndex:  999,
        particleCount: 100,
        spread: 150,
        angle: -100,
        origin: {
          x: 1,
          y: 0
        }
      })
    }
  }

  return (
    <Layout title={'Pokemon: ' + pokemon.name}>
      <Grid.Container css={{marginTop: '5px'}} gap={2}>
        <Grid xs={12} sm={4}>
          <Card isHoverable css={{padding: '2rem'}}>
            <Card.Body>
              <Card.Image 
                src={pokemon.sprites.other?.dream_world.front_default || '/no-image.jpg'}
                alt={pokemon.name}
                width="100%"
                height={200}
              />
            </Card.Body>
          </Card>
        </Grid>
        <Grid xs={12} sm={8}>
          <Card>
            <Card.Header css={{display: 'flex', justifyContent: 'space-between'}}>
              <Text h1 transform='capitalize'>{pokemon.name}</Text>

              <Button color={'gradient'} ghost={!isInFavorites } onClick={() => onToggleFavorites(pokemon.id)}>
                {
                  isInFavorites ? 'Remove from favorites' : 'Add to favorites'
                }
              </Button>
            </Card.Header>

            <Card.Body>
              <Text size={30}>Sprites</Text>

              <Container css={{display: 'flex', justifyContent: 'space-between'}}>
                <Image src={pokemon.sprites.front_default} alt={pokemon.name} width={100} height={100} />
                <Image src={pokemon.sprites.back_default} alt={pokemon.name} width={100} height={100} />
                <Image src={pokemon.sprites.front_shiny} alt={pokemon.name} width={100} height={100} />
                <Image src={pokemon.sprites.back_shiny} alt={pokemon.name} width={100} height={100} />

              </Container>
            </Card.Body>
          </Card>
        </Grid>
      </Grid.Container>
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async (ctx) => {

  const pokemonsList: PokemonsResponse = await pokeApi()
  const pokemonsNames: string[] = pokemonsList.results.map(pokemon => pokemon.name)

  return {
    paths: pokemonsNames.map((name: string) => ({
      params: { name }
    })),
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async (ctx) => {

  const { name } = ctx.params as { name: string }

  const pokemon: PokemonData = await pokemonApi(name)

  return {
    props: {
      pokemon
    }
  }
}


export default PokemonPage
