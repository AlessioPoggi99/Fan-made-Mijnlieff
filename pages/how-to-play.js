import { Box, Container, Heading } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Paragraph from '../components/paragraph'

const HowToPlay = () => (
  <Layout title="How to play">
    <Container>
      <Box>
        <Heading as="h3" fontSize={20} mb={4}>
          Rules
        </Heading>
        <Section delay={0.1}>
          <Paragraph>
            The game is played on a 4 x 4 square grid. Each Player has eight
            pieces with two of four different symbols. Each piece when played
            determines where your opponent can play their next piece. For
            example you can force your opponent to play in a straight line
            (either othogonally or diagonally) from the piece just played, or to
            play next to or away from the piece just played. The aim is to form
            lines of 3 pieces of your color to get 1 point or lines of 4 that
            worth you 2 points. When game ends the player with highest score
            wins.
          </Paragraph>
        </Section>
      </Box>

      <Box>
        <Heading as="h3" fontSize={20} mb={4}>
          Pieces
        </Heading>
        <Section delay={0.1}>
          <Paragraph>
            Pieces are blue or pink and who has the blue ones is the first
            player. In following examples pink dots indicates where opponent is
            allowed to play. N.B. In every game first blue piece must be placed
            in one of the edge board tiles.
          </Paragraph>
        </Section>
      </Box>
    </Container>
  </Layout>
)

export default HowToPlay
export { getServerSideProps } from '../components/chakra'
