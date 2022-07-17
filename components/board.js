import { SimpleGrid, GridItem, useColorModeValue } from '@chakra-ui/react'
import BoardTile from './board-tile'

const Board = ({ board, turn, onBoardTileClick }) => {
  const bg = useColorModeValue('whiteAlpha.500', 'whiteAlpha.100')
  const lastPlayedBg = useColorModeValue('blackAlpha.200', 'whiteAlpha.300')
  const hoverBg = useColorModeValue('blackAlpha.50', 'whiteAlpha.300')

  return (
    <SimpleGrid
      columns={4}
      spacing={0}
      width="fit-content"
      margin="auto"
      borderWidth={0.5}
      borderColor="#525252"
    >
      {board &&
        board.map(tile => (
          <GridItem
            key={tile.position}
            width={{ base: '3.5rem', md: '4.5rem' }}
            height={{ base: '3.5rem', md: '4.5rem' }}
            padding="0.3rem"
            bg={tile.isLastPlayed ? lastPlayedBg : bg}
            borderWidth={0.5}
            borderColor="#525252"
            cursor={tile.isEmpty && tile.isPlayable ? 'pointer' : 'default'}
            _hover={tile.isEmpty && tile.isPlayable ? { bg: hoverBg } : ''}
            onClick={() => {
              if (tile.isEmpty && tile.isPlayable) onBoardTileClick(tile)
            }}
          >
            <BoardTile tile={tile} turn={turn} />
          </GridItem>
        ))}
    </SimpleGrid>
  )
}

export default Board
