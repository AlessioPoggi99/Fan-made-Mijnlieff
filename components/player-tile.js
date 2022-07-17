import { Box } from '@chakra-ui/react'
import { MdClose, MdAdjust, MdStopCircle } from 'react-icons/md'
import { IoMdAdd } from 'react-icons/io'

const PlayerTile = ({ tile }) => {
  const bg =
    tile.color === 'blue' ? 'blue.200' : tile.color === 'pink' ? 'pink.200' : ''
  const color =
    tile.color === 'blue' ? 'blue.600' : tile.color === 'pink' ? 'pink.600' : ''
  const selectedBg =
    tile.color === 'blue' ? 'blue.300' : tile.color === 'pink' ? 'pink.300' : ''
  const selectedColor =
    tile.color === 'blue' ? 'blue.700' : tile.color === 'pink' ? 'pink.700' : ''
  const playedBg =
    tile.color === 'blue' ? 'blue.100' : tile.color === 'pink' ? 'pink.100' : ''

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      width="100%"
      height="100%"
      padding="0.5rem"
      shadow="base"
      fontSize={tile.type === 'puller' ? '2rem' : '4rem'}
      borderRadius="0.75rem"
      bg={tile.isSelected ? selectedBg : tile.isPlayed ? playedBg : bg}
      _hover={tile.isPlayed ? '' : { bg: selectedBg, color: selectedColor }}
      color={tile.isSelected ? selectedColor : color}
    >
      {tile.isPlayed ? (
        ''
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

export default PlayerTile
