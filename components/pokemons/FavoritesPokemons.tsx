import { Grid } from '@nextui-org/react'
import React from 'react'
import { FavoriteCard } from './';


interface Props {
  favoritesList: number[]
}

export const FavoritesPokemons = ({favoritesList}: Props) => {
  return (
    <Grid.Container gap={2} direction={'row'} justify='flex-start'>
    {
      favoritesList.map(id => <Grid xs={6} sm={2} xl={1} key={id}>
       <FavoriteCard id={id} /> 
      </Grid>)
    }
  </Grid.Container>
  )
}
