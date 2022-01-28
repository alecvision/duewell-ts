import { Button, Grommet, Header, Main, Box, Nav, RoutedButton } from 'grommet'
import { ReactNode } from 'react'
import * as Icons from 'grommet-icons'
import UserCard from './usercard'

export default function Layout({ children }: {children: ReactNode}) {
  return (
    <Grommet plain>
      <Header
        justify="between"
        margin="none"
        background="brand"
      >
        <Button href='/' icon={<Icons.Home />} hoverIndicator />
        <Nav direction={'column'} background={'brand'} pad={'medium'} flex={true}>
            <RoutedButton path="dashboard">Dashboard</RoutedButton>
        </Nav>
        <UserCard />
      </Header>
      <Main>
        <Box width={"100%"} background="light-2">{children}</Box>
      </Main>
    </Grommet>
  )
} 