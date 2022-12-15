import { Navbar, Text, Image } from '@nextui-org/react';
import Link from 'next/link';
import NextLink  from 'next/link'

export const NavigationBar = () => {
  return (
    <Navbar isBordered variant={'floating'}>
      <Navbar.Brand style={{
        display: 'flex',
        gap: '1rem',
      }}>
        <Image 
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/770px-Pok%C3%A9_Ball_icon.svg.png' 
          alt='Logo app' 
          width={50} />
          <Link href={'/'} style={{display: 'flex'}}>
            <Text color='white' h2>P</Text>
            <Text color='white' h3>okemon</Text>
          </Link>
      </Navbar.Brand>
      <Navbar.Content hideIn="xs">
        <Navbar.Link isActive href="/favorites">Favorites</Navbar.Link>
      </Navbar.Content>
    </Navbar>
  )
}
