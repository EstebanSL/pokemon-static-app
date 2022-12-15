import { Container, Image, Text } from '@nextui-org/react'
import React from 'react'

export const NoFavorites = () => {
  return (
    <Container css={{
      display: 'flex',
      flexDirection: 'column',
      height: 'calc(100vh - 100px)',
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf: 'center'

    }}>
      <Text h1>No Favorites added.</Text>
      <Image
        src='https://raw.githubusercontent.com/PokeApi/sprites/master/sprites/pokemon/other/dream-world/1.svg'
        alt='placeholder'
        width={200}
        height={200}
        css={{
          opacity: .2
        }}
        />
    </Container>
  )
}
