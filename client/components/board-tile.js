import { Box } from '@chakra-ui/react'
import { MdClose, MdAdjust, MdStopCircle, MdCircle } from 'react-icons/md'
import { IoMdAdd } from 'react-icons/io'

const BoardTile = ({ tile, turn = null }) => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      width="100%"
      height="100%"
      padding="0.5rem"
      shadow="base"
      fontSize={
        tile.isEmpty && tile.isPlayable
          ? '0.5rem'
          : tile.type === 'puller'
          ? '2rem'
          : '4rem'
      }
      borderRadius="0.75rem"
      bg={
        tile.color === 'blue'
          ? 'blue.200'
          : tile.color === 'pink'
          ? 'pink.200'
          : ''
      }
      color={
        tile.color === 'blue'
          ? 'blue.600'
          : tile.color === 'pink'
          ? 'pink.600'
          : turn % 2 === 0
          ? 'blue.600'
          : 'pink.600'
      }
    >
      {tile.isEmpty && tile.isPlayable ? (
        <MdCircle />
      ) : tile.type === 'straight' ? (
        <IoMdAdd />
      ) : tile.type === 'diagonal' ? (
        <MdClose />
      ) : tile.type === 'pusher' ? (
        <MdStopCircle />
      ) : tile.type === 'puller' ? (
        <MdAdjust />
      ) : (
        ''
      )}
    </Box>
  )
}

export default BoardTile
