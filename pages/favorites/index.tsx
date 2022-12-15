import { Card, Container, Grid, Image, Text } from '@nextui-org/react'
import React, { useEffect } from 'react'
import { Layout } from '../../components/layouts'
import { NavigationBar, NoFavorites } from '../../components/ui'
import { useState } from 'react';
import { localFavorites } from '../../utils';
import { useRouter } from 'next/router';
import { FavoritesPokemons } from '../../components/pokemons';

const FavoritesList = () => {

  const [favoritesList, setFavoritesList] = useState<number[]>([])

  useEffect(() => {
    setFavoritesList(localFavorites.pokemonsfavorites())

  }, [])



  return (
    <Layout title='Pokemon favorites'>
      {
        favoritesList.length === 0
          ? (<NoFavorites></NoFavorites>)
          :
          (
            <FavoritesPokemons favoritesList={favoritesList} />
          )
      }
    </Layout>
  )
}

export default FavoritesList