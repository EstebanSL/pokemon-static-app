import { Card, Grid, Row, Text } from '@nextui-org/react'
import { useRouter } from 'next/router'
import React from 'react'
import { Pokemon } from '../../interfaces'

interface Props {
  pokemon: Pokemon,
}

export const PokemonCard = ({ pokemon }: Props) => {

  const router = useRouter()

  const onPokemonClick = () => {
    router.push(`/pokemon/${pokemon.id}`)
  }

  return (
    <Grid xs={6} sm={3}>
      <Card isPressable onClick={onPokemonClick}>
        <Card.Body css={{ p: 0 }}>
          <Card.Image
            src={pokemon.img}
            objectFit="fill"
            width="100%"
            height={140}
            alt={pokemon.name}
          />
        </Card.Body>
        <Card.Footer css={{ justifyItems: "flex-start" }}>
          <Row wrap="wrap" justify="space-between" align="center">
            <Text b>{pokemon.name}</Text>
            <Text css={{ color: "$accents7", fontWeight: "$semibold", fontSize: "$sm" }}>
              # {pokemon.id}
            </Text>
          </Row>
        </Card.Footer>
      </Card>
    </Grid>
  )
}
