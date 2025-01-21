/*** AI v1 -> always plays randomly ***/
export const randomAiPlay = (board, aiPlayer) => {
  const boardPlayableTiles = getBoardPlayableTiles(board)
  const aiPlayableTiles = getAiPlayableTiles(aiPlayer)

  return {
    aiSelection:
      aiPlayableTiles[Math.floor(Math.random() * aiPlayableTiles.length)],
    boardTile:
      boardPlayableTiles[Math.floor(Math.random() * boardPlayableTiles.length)]
  }
}

// Function that return an array of all board playable tiles (playable and empty tiles)
const getBoardPlayableTiles = board => {
  let boardPlayableTiles = []
  board.forEach(tile => {
    if (tile.isPlayable && tile.isEmpty) boardPlayableTiles.push(tile)
  })

  return boardPlayableTiles
}

// Function that return an array of all aiPlayer playable tiles (not played tiles)
const getAiPlayableTiles = aiPlayer => {
  let aiPlayableTiles = []
  aiPlayer.tiles.forEach(tile => {
    if (!tile.isPlayed) aiPlayableTiles.push(tile)
  })

  return aiPlayableTiles
}

/*** AI v2 -> Minimax Algorithm ***/
const bestMove = board => {
  board.forEach(tile => {
    if (tile.isPlayable && tile.isEmpty) minimax(board)
  })
}
