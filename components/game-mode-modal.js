import NextLink from 'next/link'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  VStack,
  Text,
  Flex
} from '@chakra-ui/react'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { ImCheckmark2 } from 'react-icons/im'

const GameModeModal = ({ isOpen, onClose }) => {
  const router = useRouter()
  const [colorSel, setColorSel] = useState(1)

  const handlePlayClick = isAiButton => {
    let ai, flip
    if (isAiButton) {
      if (colorSel === 0) {
        ai = 2
        flip = 0
      } else if (colorSel === 2) {
        ai = 1
        flip = 1
      } else {
        ai = Math.floor(Math.random() * 2) + 1
        flip = ai === 1 ? 1 : 0
      }
    } else {
      ai = 0
      if (colorSel === 0) flip = 0
      else if (colorSel === 2) flip = 1
      else flip = Math.floor(Math.random() * 2)
    }

    router.push(`/play?ai=${ai}&flip=${flip}`)
  }

  return (
    <>
      <Modal
        size={{ md: 'sm', base: 'xs' }}
        isCentered
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader textAlign="center">New game</ModalHeader>
          <ModalCloseButton />

          <ModalBody>
            <VStack spacing={5}>
              <VStack spacing={3}>
                <Text fontWeight="bold">I play as</Text>
                <Flex gap={2}>
                  <Flex borderRadius="xl" onClick={() => setColorSel(0)}>
                    <ColorSquare selected={colorSel === 0} color="blue" />
                  </Flex>
                  <Flex borderRadius="xl" onClick={() => setColorSel(1)}>
                    <ColorSquare
                      selected={colorSel === 1}
                      color="blue"
                      color2="pink"
                    />
                  </Flex>
                  <Flex borderRadius="xl" onClick={() => setColorSel(2)}>
                    <ColorSquare selected={colorSel === 2} color="pink" />
                  </Flex>
                </Flex>
              </VStack>

              <VStack width="60%">
                <Button
                  width="100%"
                  colorScheme="teal"
                  variant="solid"
                  onClick={() => handlePlayClick(false)}
                >
                  Play
                </Button>
                <Button
                  width="100%"
                  colorScheme="teal"
                  variant="outline"
                  onClick={() => handlePlayClick(true)}
                >
                  Play vs AI
                </Button>
                <Text fontWeight="bold">or</Text>
                <NextLink href="/play-online" passHref>
                  <Button
                    as="a"
                    width="100%"
                    colorScheme="teal"
                    variant="solid"
                  >
                    Play online
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

const ColorSquare = ({ selected, color, color2 }) => {
  return (
    <Flex
      width="3rem"
      height="3rem"
      bg={selected ? `${color}.100` : `${color}.200`}
      bgGradient={
        color2
          ? selected
            ? `linear(to-r, ${color}.100 50%, ${color2}.100 50%)`
            : `linear(to-r, ${color}.200 50%, ${color2}.200 50%)`
          : ''
      }
      borderRadius="xl"
      borderColor={selected ? `black` : `${color}.700`}
      borderLeftColor={color2 ? (selected ? `black` : `${color}.700`) : ''}
      borderTopColor={color2 ? (selected ? `black` : `${color}.700`) : ''}
      borderRightColor={color2 ? (selected ? `black` : `${color2}.700`) : ''}
      borderBottomColor={color2 ? (selected ? `black` : `${color2}.700`) : ''}
      borderWidth={1}
      justify="center"
      align="center"
      color="black"
      shadow="md"
    >
      {selected ? <ImCheckmark2 size={30} /> : <></>}
    </Flex>
  )
}

export default GameModeModal
