import Head from 'next/head'

interface Props {
  children: JSX.Element,
  title?: string
}

export const Layout = ({children, title='Pokemon App'}: Props) => {
  return (
    <>
      <Head>
        <title>{ title }</title>
        <meta name='Author' content='GandhiSL'/>
        <meta name='description' content='Información sobre el pokemon lorem Ipsum'/>
        <meta name='keywords' content='Lorem Ipsum, pokemon, pokedex'/>
      </Head>

      <main>
        { children }
      </main>
    </>
  )
}