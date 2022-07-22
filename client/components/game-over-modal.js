import NextLink from 'next/link'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  VStack,
  Text,
  Flex,
  Box
} from '@chakra-ui/react'
import Board from './board'

const GameOverModal = ({ gameOver, points, resetGame, board }) => {
  return (
    <>
      <Modal size={{ md: 'sm', base: 'xs' }} isCentered isOpen={gameOver}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader textAlign="center">Game Over</ModalHeader>

          <ModalBody>
            <VStack spacing={7}>
              <VStack spacing={0}>
                <PointFlex points={points} />
                <Box
                  transform="scale(0.6)"
                  pointerEvents="none"
                  style={{ marginTop: '-35px', marginBottom: '-50px' }}
                >
                  <Board board={board} turn={null} onBoardTileClick={null} />
                </Box>
              </VStack>
              <VStack width="60%">
                <Button
                  width="100%"
                  colorScheme="teal"
                  variant="solid"
                  onClick={() => resetGame()}
                >
                  Play again
                </Button>
                <NextLink href="/" passHref>
                  <Button
                    as="a"
                    width="100%"
                    colorScheme="teal"
                    variant="outline"
                  >
                    Back home
                  </Button>
                </NextLink>
              </VStack>
            </VStack>
          </ModalBody>

          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

const PointFlex = ({ points }) => {
  // 0 if DRAW  -  1 if BLUE wins  - 2 if PINK wins
  const winner = points[0] === points[1] ? 0 : points[0] > points[1] ? 1 : 2

  return (
    <Flex align="center" gap={5}>
      <Text
        fontSize="1.5rem"
        bg="blue.200"
        borderRadius="xl"
        color="blue.700"
        paddingX={3}
        paddingY={2}
        lineHeight="100%"
        fontWeight="bold"
      >
        {points[0]}
      </Text>
      <Box fontSize="1.5rem" lineHeight="100%" fontWeight="bold">
        {winner === 0 ? (
          'Draw'
        ) : winner === 1 ? (
          <Flex>
            <Text color="blue.300">Blue&nbsp;</Text>
            <Text>wins</Text>
          </Flex>
        ) : (
          <Flex>
            <Text color="pink.300">Pink&nbsp;</Text>
            <Text>wins</Text>
          </Flex>
        )}
      </Box>
      <Text
        fontSize="1.5rem"
        bg="pink.200"
        borderRadius="xl"
        color="pink.700"
        paddingX={3}
        paddingY={2}
        lineHeight="100%"
        fontWeight="bold"
      >
        {points[1]}
      </Text>
    </Flex>
  )
}

export default GameOverModal
