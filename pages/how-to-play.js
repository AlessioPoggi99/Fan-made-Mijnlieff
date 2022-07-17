import {
  Box,
  Container,
  Heading,
  Grid,
  VStack,
  Image,
  useColorModeValue
} from '@chakra-ui/react'
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

      <Section delay={0.1}>
        <Heading as="h3" fontSize={20} mb={4}>
          Pieces
        </Heading>
        <Paragraph>
          Pieces are blue and pink and who has the blue ones is the first
          player. In every game first blue piece must be placed in one of the
          edge board tiles. In this digital version blue/pink dots on the board
          indicate where players are allowed to play.
        </Paragraph>
        <Grid
          templateColumns={{ md: 'repeat(2, 1fr)', base: 'repeat(1, 1fr)' }}
          gap={5}
          paddingY={5}
        >
          <VStack>
            <Heading as="h6" fontSize={16}>
              Straights
            </Heading>
            <Image
              boxSize="160px"
              src={`/images/how-to-play/straight${useColorModeValue(
                '',
                '-dark'
              )}.png`}
              alt="Straight example"
            />
            <p style={{ textAlign: 'center' }}>
              Makes your opponent play into any one of the empty squares that
              lie in a straight line from where you play it
            </p>
          </VStack>
          <VStack>
            <Heading as="h6" fontSize={16}>
              Diagonals
            </Heading>
            <Image
              boxSize="160px"
              src={`/images/how-to-play/diagonal${useColorModeValue(
                '',
                '-dark'
              )}.png`}
              alt="Straight example"
            />
            <p style={{ textAlign: 'center' }}>
              Makes your opponent play into any one of the empty squares that
              lie in a diagonal line from where you play it
            </p>
          </VStack>
          <VStack>
            <Heading as="h6" fontSize={16}>
              Pushers
            </Heading>
            <Image
              boxSize="160px"
              src={`/images/how-to-play/pusher${useColorModeValue(
                '',
                '-dark'
              )}.png`}
              alt="Straight example"
            />
            <p style={{ textAlign: 'center' }}>
              Makes your opponent play into any one of the empty squares that
              are&apos;t adjacent to the square you play this into
            </p>
          </VStack>
          <VStack>
            <Heading as="h6" fontSize={18}>
              Pullers
            </Heading>
            <Image
              boxSize="160px"
              src={`/images/how-to-play/puller${useColorModeValue(
                '',
                '-dark'
              )}.png`}
              alt="Straight example"
            />
            <p style={{ textAlign: 'center' }}>
              Makes your opponent play into any one of the empty squares that
              are adjacent to the square you play this into
            </p>
          </VStack>
        </Grid>
        <Paragraph>
          If you are unable to play because the are no legal spaces available
          you must PASS. When a player passes the other one can play into ANY
          space on the board, and he&apos;s able to force the opponent to pass
          again.
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" fontSize={20} mb={4}>
          Ending the game
        </Heading>
        <Paragraph>
          As soon as one player places their last piece their opponent gets ONE
          last chance to play, which they forsake if they have to PASS, and the
          game ends. The player with most points wins.
        </Paragraph>
      </Section>
    </Container>
  </Layout>
)

export default HowToPlay
export { getServerSideProps } from '../components/chakra'
