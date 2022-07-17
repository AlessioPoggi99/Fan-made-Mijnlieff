import {
  Container,
  Box,
  Heading,
  Button,
  Link,
  List,
  ListItem
} from '@chakra-ui/react'
import {
  IoLogoInstagram,
  IoLogoGithub,
  IoPlay,
  IoHelpCircle
} from 'react-icons/io5'
import NextLink from 'next/link'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Paragraph from '../components/paragraph'

const Page = () => {
  return (
    <Layout>
      <Container>
        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Mijnlieff
            </Heading>
            <p>
              Limit and constrain your opponent&apos;s moves while trying to
              make rows of your tiles.
            </p>
          </Box>
        </Box>

        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            What&apos;s Mijnlieff?
          </Heading>
          <Paragraph>
            Imagine noughts and crosses (tic-tac-toe) but with the need to think
            several moves ahead and with each piece having a particular power
            and control over your opponent. This is Mijnlieff (Pronounced
            &quot;Mine-leaf&quot;). Try to create the most lines of 3 counters
            in your colour. The standard game is played on a 4 x 4 square grid.
            Each Player has eight pieces with two of four different symbols.
            Each piece when played determines where your opponent can play their
            next piece. In Mijnlieff each piece you play instructs your opponent
            to play in a straight line (either othogonally or diagonally) from
            the piece just played, to play away from or to play adjacent to the
            piece just played. The aim is to form lines of 3 but with your
            opponent controlling where you can play this is harder than it
            sounds. If you can play so your opponent is unable to go you get a
            free play anywhere on the board.
          </Paragraph>

          <Box w="fit-content" align="center" mx="auto" my={4}>
            <Box>
              <NextLink href="/play">
                <Button
                  rightIcon={<IoPlay />}
                  colorScheme="teal"
                  justify="center"
                  w="100%"
                >
                  Play
                </Button>
              </NextLink>
            </Box>
            <Box mt={4}>
              <NextLink href="/how-to-play">
                <Button
                  rightIcon={<IoHelpCircle />}
                  colorScheme="teal"
                  justify="center"
                >
                  How to play
                </Button>
              </NextLink>
            </Box>
          </Box>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            Who am I?
          </Heading>
          <Paragraph>
            Hi, I&apos;m Alessio Poggi a student and web developer based in
            Pavia, Italy.
          </Paragraph>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            On the web
          </Heading>
          <List>
            <ListItem>
              <Link href="https://github.com/AlessioPoggi99" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<IoLogoGithub />}
                >
                  @AlessioPoggi99
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://instagram.com/alessio.poggi" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<IoLogoInstagram />}
                >
                  @alessio.poggi
                </Button>
              </Link>
            </ListItem>
          </List>
        </Section>
      </Container>
    </Layout>
  )
}

export default Page
export { getServerSideProps } from '../components/chakra'
