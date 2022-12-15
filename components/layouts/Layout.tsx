import Head from 'next/head'
import { NavigationBar } from '../ui'

interface Props {
  children: JSX.Element,
  title?: string
}

const origin = (typeof window) === 'undefined' ? '' : window.location.origin

export const Layout = ({ children, title = 'Pokemon App' }: Props) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='Author' content='GandhiSL' />
        <meta name='description' content='Información sobre el pokemon lorem Ipsum' />
        <meta name='keywords' content='Lorem Ipsum, pokemon, pokedex' />

        <meta property="og:title" content={`Info about ${title}`} />
        <meta property="og:description" content={`Info page about ${title}`} />
        <meta property="og:image" content={`${origin}/banner.png`} />1
      </Head>


      <main>
        <NavigationBar />
        {children}
      </main>
    </>
  )
}