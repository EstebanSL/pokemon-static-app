import { Navbar, Text, Image } from '@nextui-org/react';

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
        <Text b color="inherit" hideIn="xs" >
          POKEMON
        </Text>
      </Navbar.Brand>
      <Navbar.Content hideIn="xs">
        <Navbar.Link isActive href="#">Features</Navbar.Link>
        <Navbar.Link href="#">Customers</Navbar.Link>
        <Navbar.Link href="#">Pricing</Navbar.Link>
        <Navbar.Link href="#">Company</Navbar.Link>
      </Navbar.Content>
    </Navbar>
  )
}
