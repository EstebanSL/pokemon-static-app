import { Card } from '@nextui-org/react'
import { useRouter } from 'next/router'
import React from 'react'

interface Props {
  id: number
}

export const FavoriteCard = ({id}: Props) => {

  const router = useRouter()

  const onPokemonClick = (id: number) => {
    router.push(`/pokemon/${id}`)
  }

  return (
    <Card isHoverable isPressable css={{ padding: 10 }} onClick={() => onPokemonClick(id)}>
      <Card.Image
        src={`https://raw.githubusercontent.com/PokeApi/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
        width="100%"
        height={'150px'}
      />
    </Card>
  )
}
