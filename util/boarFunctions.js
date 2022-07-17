// Function that return index of playable board tiles
export const getBoardTilePlayableIndexes = (type, position) => {
  let indexes = []
  const column = position % 4
  const row = Math.floor(position / 4)

  if (type === 'straight') {
    for (let i = 1; i < 4; i++) {
      let pos = position + i * 4
      indexes.push(pos)
      pos = position - i * 4
      indexes.push(pos)
      pos = position + i
      if (pos % 4 !== column && Math.floor(pos / 4) === row) indexes.push(pos)
      pos = position - i
      if (pos % 4 !== column && Math.floor(pos / 4) === row) indexes.push(pos)
    }
  } else if (type === 'diagonal') {
    for (let i = 1; i < 4; i++) {
      let pos = position - 4 * i - i
      if (pos % 4 === column - i && Math.floor(pos / 4) === row - i)
        indexes.push(pos)
      pos = position - 4 * i + i
      if (pos % 4 === column + i && Math.floor(pos / 4) === row - i)
        indexes.push(pos)
      pos = position + 4 * i + i
      if (pos % 4 === column + i && Math.floor(pos / 4) === row + i)
        indexes.push(pos)
      pos = position + 4 * i - i
      if (pos % 4 === column - i && Math.floor(pos / 4) === row + i)
        indexes.push(pos)
    }
  } else if (type === 'puller' || type === 'pusher') {
    //const bool = type === 'puller' ? true : false
    //setAllBoardTilesPlayable(!bool)
    let pos = position + 1 * 4
    indexes.push(pos)
    pos = position - 1 * 4
    indexes.push(pos)
    pos = position + 1
    if (pos % 4 !== column && Math.floor(pos / 4) === row) indexes.push(pos)
    pos = position - 1
    if (pos % 4 !== column && Math.floor(pos / 4) === row) indexes.push(pos)
    pos = position - 4 - 1
    if (pos % 4 === column - 1 && Math.floor(pos / 4) === row - 1)
      indexes.push(pos)
    pos = position - 4 + 1
    if (pos % 4 === column + 1 && Math.floor(pos / 4) === row - 1)
      indexes.push(pos)
    pos = position + 4 + 1
    if (pos % 4 === column + 1 && Math.floor(pos / 4) === row + 1)
      indexes.push(pos)
    pos = position + 4 - 1
    if (pos % 4 === column - 1 && Math.floor(pos / 4) === row + 1)
      indexes.push(pos)
  }

  const boardIndexes = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

  if (type === 'pusher')
    return boardIndexes.filter(index => {
      return indexes.indexOf(index) === -1
    })
  else
    return indexes.filter(index => {
      //return index >= 0 && index <= 15
      return boardIndexes.includes(index)
    })
}

// Function that return true if the game is over
export const isGameOver = (canPlay, turn, player1, player2) => {
  let gameOver = true

  const nextPlayer = turn % 2 ? player1 : player2
  const actualPlayer = turn % 2 ? player2 : player1

  if (canPlay) {
    // If opponent 'canPlay', it's game over only if he has finished his 8 tiles
    nextPlayer.tiles.forEach(tile => {
      if (!tile.isPlayed) gameOver = false
    })
  } else {
    // If opponent 'cannotPlay', if I've finished my 8 tiles it's game over
    // but if I've not finished my tiles it's game over only if opponent has finished
    actualPlayer.tiles.forEach(tile => {
      if (!tile.isPlayed) gameOver = false
    })
    if (!gameOver) {
      gameOver = true
      nextPlayer.tiles.forEach(tile => {
        if (!tile.isPlayed) gameOver = false
      })
    }
  }

  return gameOver
}

// Constants used to calculate player's points in 'calcPlayersPoints' function
const QUADRIS = [
  [
    [0, 1, 2, 3],
    [4, 5, 6, 7],
    [8, 9, 10, 11],
    [12, 13, 14, 15]
  ],
  [
    [0, 4, 8, 12],
    [1, 5, 9, 13],
    [2, 6, 10, 14],
    [3, 7, 11, 15]
  ],
  [
    [0, 5, 10, 15],
    [3, 6, 9, 12]
  ]
]
const TRIS = [
  [
    [0, 1, 2],
    [1, 2, 3],
    [4, 5, 6],
    [5, 6, 7],
    [8, 9, 10],
    [9, 10, 11],
    [12, 13, 14],
    [13, 14, 15]
  ],
  [
    [0, 4, 8],
    [4, 8, 12],
    [1, 5, 9],
    [5, 9, 13],
    [2, 6, 10],
    [6, 10, 14],
    [3, 7, 11],
    [7, 11, 15]
  ],
  [
    [0, 5, 10],
    [5, 10, 15],
    [3, 6, 9],
    [6, 9, 12]
  ]
]
const TRIS_SECONDARY_DIAG = [
  [4, 9, 14],
  [1, 6, 11],
  [2, 5, 8],
  [7, 10, 13]
]
// Function that return player's point when game is over
export const getPlayersPoints = board => {
  let points = [0, 0]
  let skip = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0]
  ]

  QUADRIS.forEach((qArr, index) => {
    qArr.forEach((internalArr, internalIndex) => {
      const color1 = board[internalArr[0]].color
      const color2 = board[internalArr[1]].color
      const color3 = board[internalArr[2]].color
      const color4 = board[internalArr[3]].color
      if (
        color1 === color2 &&
        color1 === color3 &&
        color1 === color4 &&
        color1 !== ''
      ) {
        skip[index][internalIndex] = 1
        if (color1 === 'blue') points[0] += 2
        else points[1] += 2
      }
    })
  })
  TRIS.forEach((tArr, index) => {
    tArr.forEach((internalArr, internalIndex) => {
      const color1 = board[internalArr[0]].color
      const color2 = board[internalArr[1]].color
      const color3 = board[internalArr[2]].color
      if (
        color1 === color2 &&
        color1 === color3 &&
        skip[index][Math.floor(internalIndex / 2)] === 0 &&
        color1 !== ''
      ) {
        if (color1 === 'blue') points[0] += 1
        else points[1] += 1
      }
    })
  })
  TRIS_SECONDARY_DIAG.forEach(tsArr => {
    const color1 = board[tsArr[0]].color
    const color2 = board[tsArr[1]].color
    const color3 = board[tsArr[2]].color
    if (color1 === color2 && color1 === color3 && color1 !== '') {
      if (color1 === 'blue') points[0] += 1
      else points[1] += 1
    }
  })

  return points
}
