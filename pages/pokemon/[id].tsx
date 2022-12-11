import { useRouter } from 'next/router'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { PokemonData } from '../../interfaces/pokemonData';
import { pokemonApi } from '../../api/pokeApi';
import { Layout } from '../../components/layouts';
import { Button, Card, Container, Grid, Image, Text } from '@nextui-org/react';

interface Props {
  pokemon: PokemonData
}

const PokemonPage: NextPage<Props> = ({pokemon}) => {

  const router = useRouter()

  console.log(router.query)

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

              <Button color={'gradient'} ghost>
                Add to favorites
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

  const pokemonsList = [...Array(151)].map((value, index) => `${index + 1}`)

  return {
    paths: pokemonsList.map((id: string) => ({
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
