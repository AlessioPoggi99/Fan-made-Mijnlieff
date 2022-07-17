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
  Box
} from '@chakra-ui/react'

const GameOverModal = ({ gameOver, points, resetGame }) => {
  return (
    <>
      <Modal isCentered isOpen={gameOver}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader textAlign="center">Game Over</ModalHeader>

          <ModalBody>
            <VStack>
              <Box></Box>
              <Button
                colorScheme="teal"
                variant="solid"
                width="50%"
                onClick={() => resetGame()}
              >
                Play again
              </Button>
              <NextLink href="/" passHref>
                <Button as="a" colorScheme="teal" variant="outline" width="50%">
                  Back home
                </Button>
              </NextLink>
            </VStack>
          </ModalBody>

          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default GameOverModal
