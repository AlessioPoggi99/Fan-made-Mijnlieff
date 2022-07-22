import { Grid, GridItem } from '@chakra-ui/react'
import PlayerTile from './player-tile'

const Player = ({ player, turn = null, onPlayerTileClick }) => {
  return (
    <Grid
      templateRows="repeat(2, 1fr)"
      templateColumns="repeat(4, 1fr)"
      autoFlow="column"
      gap={1}
      width="fit-content"
      margin="auto"
    >
      {player &&
        player.tiles.map(tile => (
          <GridItem
            key={tile.position}
            width={{ base: '3.2rem', md: '4.2rem' }}
            height={{ base: '3.2rem', md: '4.2rem' }}
            cursor={tile.isPlayed ? 'default' : 'pointer'}
            onClick={() => {
              if (!tile.isPlayed && player.number - 1 === turn % 2)
                onPlayerTileClick(tile)
            }}
          >
            <PlayerTile tile={tile} turn={turn} />
          </GridItem>
        ))}
    </Grid>
  )
}

export default Player
