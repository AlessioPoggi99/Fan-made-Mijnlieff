import Logo from './logo'
//import NextLink from 'next/link'
import {
  Container,
  Box,
  Heading,
  Flex,
  /*Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,*/
  useColorModeValue
} from '@chakra-ui/react'
//import { HamburgerIcon } from '@chakra-ui/icons'
import ThemeToggleButton from './theme-toggle-button'

const Navbar = props => {
  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue('#ffffff40', '#20202380')}
      css={{ backdropFilter: 'blur(10px)' }}
      zIndex={2}
      {...props}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.md"
        wrap="wrap"
        align="center"
        justify="space-between"
      >
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={'tighter'}>
            <Logo />
          </Heading>
        </Flex>

        <Box flex={1} align="right">
          <ThemeToggleButton />

          {/*
          <Box ml={2} display="inline-block">
            <Menu isLazy id="navbar-menu">
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
              />
              <MenuList>
                <MenuItem py={2}>Restart game</MenuItem>
                <NextLink href="/" passHref>
                  <MenuItem py={2}>Back home</MenuItem>
                </NextLink>
              </MenuList>
            </Menu>
          </Box>
          */}
        </Box>
      </Container>
    </Box>
  )
}

export default Navbar
