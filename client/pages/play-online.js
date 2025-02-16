import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useRouter } from 'next/router'
import {
  Container,
  VStack,
  Box,
  NumberInput,
  NumberInputField,
  Text,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure
} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Board from '../components/board'
import Player from '../components/player'
import {
  getBoardTilePlayableIndexes,
  isGameOver,
  getPlayersPoints
} from '../util/boarFunctions'
import GameOverModal from '../components/game-over-modal'

import io from 'socket.io-client'
const socket = io.connect('http://192.168.1.124:8000')

const PlayOnline = () => {
  const [turn, setTurn] = useState(-1)
  const [board, setBoard] = useState()
  const [player1, setPlayer1] = useState()
  const [player2, setPlayer2] = useState()
  const [playerSelection, setPlayerSelection] = useState()
  const [gameOver, setGameOver] = useState(false)
  const [points, setPoints] = useState([0, 0])

  const [roomCode, setRoomCode] = useState('')

  const router = useRouter()
  const flip = 0 //parseInt(router.query.flip, 10) // 1 true  - 0 false

  const { isOpen, onOpen, onClose } = useDisclosure() // SurrendModal

  useEffect(() => {
    resetGame()
    onOpen()
  }, [])

  useEffect(() => {
    socket.on('error', data => {
      console.log(data, sdata.message)
    })
  }, [socket])

  // Function that reset all states to thieir initial value to start a new game
  const resetGame = () => {
    setTurn(-1)
    setPlayerSelection()
    setupBoard()
    setupPlayers()
    setGameOver(false)
    setPoints([0, 0])
    onClose()
    setTurn(0)
  }

  /*** SOCKET.IO ***/
  const joinRoom = () => {
    const rc = Number(roomCode)
    if (Number.isInteger(rc) && rc >= 1000 && rc <= 9999)
      socket.emit('joinRoom', roomCode)
  }

  /*** BOARD ***/
  // Function that setup board (reset the board)
  const setupBoard = () => {
    const boardArr = []
    for (var i = 0; i < 16; i++) {
      boardArr.push({
        position: i,
        isEmpty: true,
        isLastPlayed: false,
        isPlayable: i === 5 || i === 6 || i === 9 || i === 10 ? false : true,
        type: '',
        color: ''
      })
    }
    setBoard(boardArr)
  }
  // Function that handle board tile click (PLAY function)
  const handleBoardTileClick = (tile, aiSelection = null) => {
    if (!playerSelection && !aiSelection) return

    playerSelection = playerSelection || aiSelection

    // Put player tile on the board
    let temp_board = [...board]
    let temp_tile = { ...temp_board[tile.position] }
    temp_tile.type = playerSelection.type
    temp_tile.color = playerSelection.color
    temp_tile.isEmpty = false
    temp_tile.isLastPlayed = true
    temp_board[tile.position] = temp_tile

    // Retrive playable board tile indexes
    const playableIndexes = getBoardTilePlayableIndexes(
      playerSelection.type,
      tile.position
    )

    // Set lastPlayed board tile and every tile not plyable
    temp_board.forEach((t, index) => {
      if (index === tile.position) return
      t.isLastPlayed = false
      t.isPlayable = false
    })

    // Set playable board tiles and check if next player can play
    let canPlay = false
    playableIndexes.forEach(index => {
      if (temp_board[index].isEmpty) canPlay = true
      temp_board[index].isPlayable = true
    })

    // Call function that set player's tiles after player has played
    playerPlay()

    // If is game over set all board tile not playable and calculate points
    if (isGameOver(canPlay, turn, player1, player2)) {
      temp_board.forEach(tile => (tile.isPlayable = false))
      setPoints(getPlayersPoints(temp_board))
      setTimeout(() => {
        setGameOver(true)
      }, 750)
    }
    // If it's not game over increment turn by 1 or 2
    else {
      // If next player can play increment tun
      if (canPlay) {
        setTurn(turn + 1)
      }
      // If next player can't play double increment turn and set all board tile playable
      else {
        setTurn(turn + 2)
        temp_board.forEach(tile => (tile.isPlayable = true))
      }
    }

    // Set board STATE
    setBoard(temp_board)
  }

  /*** PLAYER ***/
  // Function that setup players' tiles (reset tiles)
  const setupPlayers = () => {
    const players = [{}, {}]
    for (let p = 0; p < 2; p++) {
      players[p].number = p + 1
      players[p].color = p ? 'pink' : 'blue'
      let tiles = []
      for (let i = 0; i < 8; i++) {
        tiles.push({
          position: i,
          isPlayed: false,
          isSelected: false,
          type:
            i < 2
              ? 'pusher'
              : i < 4
              ? 'puller'
              : i < 6
              ? 'straight'
              : 'diagonal',
          color: p ? 'pink' : 'blue'
        })
      }
      players[p].tiles = tiles
    }
    setPlayer1(players[0])
    setPlayer2(players[1])
  }
  // Function that handle player tile click
  const handlePlayerTileClick = tile => {
    const selected = tile.isSelected ? false : true

    let temp_player = turn % 2 === 0 ? player1 : player2
    temp_player.tiles.forEach(tile => (tile.isSelected = false))
    temp_player.tiles[tile.position].isSelected = selected

    if (selected) setPlayerSelection(tile)
    else setPlayerSelection(null)

    if (turn % 2 === 0) setPlayer1(temp_player)
    else setPlayer2(temp_player)
  }
  // Function called when a player's tile is played on the board
  const playerPlay = () => {
    // Set played player's tile 'isPlayed = true'
    let temp_player = turn % 2 === 0 ? player1 : player2
    temp_player.tiles.forEach((tile, index) => {
      tile.isSelected = false
      if (index === playerSelection.position) tile.isPlayed = true
    })

    if (turn % 2 === 0) setPlayer1(temp_player)
    else setPlayer2(temp_player)

    // Set 'playerSelection' to null
    setPlayerSelection(null)
  }

  return (
    <Layout title="Play">
      <Container
        minH="calc(100vh - 56px - 32px)"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <VStack spacing={10}>
          <VStack spacing={2}>
            <PlayerHilight
              isVisible={
                gameOver
                  ? false
                  : flip
                  ? turn % 2
                    ? false
                    : true
                  : turn % 2
                  ? true
                  : false
              }
              bg={flip ? 'blue.600' : 'pink.600'}
            />
            <Player
              player={flip ? player1 : player2}
              turn={turn}
              onPlayerTileClick={handlePlayerTileClick}
            />
            <PlayerHilight
              isVisible={
                gameOver
                  ? false
                  : flip
                  ? turn % 2
                    ? false
                    : true
                  : turn % 2
                  ? true
                  : false
              }
              bg={flip ? 'blue.600' : 'pink.600'}
            />
          </VStack>

          <Board
            board={board}
            turn={turn}
            onBoardTileClick={handleBoardTileClick}
          />

          <VStack spacing={2}>
            <PlayerHilight
              isVisible={
                gameOver
                  ? false
                  : flip
                  ? turn % 2
                    ? true
                    : false
                  : turn % 2
                  ? false
                  : true
              }
              bg={flip ? 'pink.600' : 'blue.600'}
            />
            <Player
              player={flip ? player2 : player1}
              turn={turn}
              onPlayerTileClick={handlePlayerTileClick}
            />
            <PlayerHilight
              isVisible={
                gameOver
                  ? false
                  : flip
                  ? turn % 2
                    ? true
                    : false
                  : turn % 2
                  ? false
                  : true
              }
              bg={flip ? 'pink.600' : 'blue.600'}
            />
          </VStack>
        </VStack>

        <RoomSelectionModal
          isOpen={isOpen}
          onClose={onClose}
          router={router}
          joinRoom={joinRoom}
          roomCode={roomCode}
          setRoomCode={setRoomCode}
        />
        <GameOverModal
          gameOver={gameOver}
          points={points}
          resetGame={resetGame}
          board={board}
        />
      </Container>
    </Layout>
  )
}

const PlayerHilight = ({ isVisible, bg }) => {
  let animate

  if (isVisible) animate = { opacity: 1 }
  else animate = { opacity: 0 }

  return (
    <Box
      as={motion.div}
      width="100%"
      height={1}
      bg={bg}
      borderRadius="xl"
      animate={animate}
    />
  )
}

const RoomSelectionModal = ({
  isOpen,
  onClose,
  router,
  joinRoom,
  roomCode,
  setRoomCode
}) => {
  return (
    <>
      <Modal size={{ md: 'sm', base: 'xs' }} isCentered isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader textAlign="center">Online room</ModalHeader>

          <ModalBody>
            <VStack spacing={3}>
              <Text fontWeight="bold">
                Create or join a game
                <Text fontWeight="thin" textAlign="center" fontSize={14}>
                  Insert a 4 digits code
                </Text>
              </Text>

              <VStack width="100%" spacing={6}>
                <VStack width="100%">
                  <NumberInput
                    width="70%"
                    min={1000}
                    max={9999}
                    keepWithinRange={false}
                    clampValueOnBlur={false}
                    value={roomCode}
                    onChange={value => {
                      if (
                        value[value.length - 1] !== 'E' &&
                        value[value.length - 1] !== 'e' &&
                        value[value.length - 1] !== '+' &&
                        value[value.length - 1] !== '-' &&
                        value[value.length - 1] !== '.'
                      )
                        setRoomCode(value)
                    }}
                  >
                    <NumberInputField placeholder="1234" textAlign="center" />
                  </NumberInput>
                  <Button
                    width="70%"
                    colorScheme="teal"
                    variant="solid"
                    onClick={joinRoom}
                  >
                    Join game
                  </Button>
                </VStack>
                <Button
                  width="70%"
                  colorScheme="teal"
                  variant="outline"
                  onClick={() => router.push('/')}
                >
                  Back to home
                </Button>
              </VStack>
            </VStack>
          </ModalBody>

          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default PlayOnline
// export { getServerSideProps } from '../components/chakra'
