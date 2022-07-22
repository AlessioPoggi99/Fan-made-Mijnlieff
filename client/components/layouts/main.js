import Head from 'next/head'
import Navbar from '../navbar.js'
import { Box, Container } from '@chakra-ui/react'

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Fan-made Mijnlieff" />
        <meta name="author" content="Alessio Poggi" />
        <meta name="author" content="AlessioPoggi99" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta property="og:site_name" content="Mijnlieff" />
        <meta name="og:title" content="Mijnlieff" />
        <meta property="og:type" content="website" />
        <link rel="manifest" href="/manifest.json" />
        <title>Mijnlieff - Homepage</title>
      </Head>

      <Navbar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        {children}
      </Container>
    </Box>
  )
}

export default Main
