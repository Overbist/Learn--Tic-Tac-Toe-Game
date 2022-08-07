import { v4 as uuid } from 'uuid'

import { useState } from 'react'
import { Square } from '../Square/Square'
import { calculateWinner } from '../../helper'

import './Board.scss'

export function Board() {
  const initialBoardState = Array(9).fill(null)
  const [board, setBoard] = useState(initialBoardState)
  const [xIsNext, setXIsNext] = useState(true)

  const winner = calculateWinner(board)

  const handleClick = (index) => {
    const boardCopy = [...board]
    if (winner || boardCopy[index]) return

    boardCopy[index] = xIsNext ? 'X' : 'O'
    setBoard(boardCopy)
    setXIsNext(!xIsNext)
  }

  const startNewGame = () => {
    return setBoard(initialBoardState)
  }

  return (
    <>
      <h1>
        {winner // TODO: added "The players agreed to a draw"
          ? 'Winner' + winner
          : `Player ${xIsNext ? 'X' : 'O'} turn `}
      </h1>
      <div className="board">
        {board.map((square, index) => (
          <Square
            key={uuid()}
            value={square}
            onClick={() => handleClick(index)}
          />
        ))}
      </div>
      <button className="btn" onClick={() => startNewGame()}>
        Clear board
      </button>
    </>
  )
}
