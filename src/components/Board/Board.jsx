import { v4 as uuid } from 'uuid'
import { toast } from 'react-toastify'

import { useEffect, useState } from 'react'
import { Square } from '../Square/Square'
import { calculateWinner } from '../../helper'

import './Board.scss'

export function Board() {
  const initialBoardState = Array(9).fill(null)

  const [board, setBoard] = useState(initialBoardState)
  const [xIsNext, setXIsNext] = useState(true)
  const [titleText, setTitleText] = useState('Player X turn')

  const winner = calculateWinner(board)

  useEffect(() => {
    nextTurn()
    draw()
    winnerText()
  }, [board])

  const handleClick = (index) => {
    const boardCopy = [...board]

    if (winner || boardCopy[index]) return

    boardCopy[index] = xIsNext ? 'X' : 'O'

    setBoard(boardCopy)
    setXIsNext(!xIsNext)
  }

  const nextTurn = () => {
    if (!winner) {
      setTitleText(`Player ${xIsNext ? 'X' : 'O'} turn `)
    }
  }

  const draw = () => {
    if (!board.includes(null)) {
      setTitleText('The players agreed to a draw')
      toast.success(`The players agreed to a draw`)
    }
  }

  const winnerText = () => {
    if (winner) {
      setTitleText(`🎉 ${winner} Winner 🎉`)
      toast.success(`Congratulations ${winner} Winner 🎉🎉🎉`)
    }
  }

  const onStartNewGame = () => {
    setBoard(initialBoardState)
  }

  return (
    <>
      <h1 className="title title--center">{titleText}</h1>
      <div className="board">
        {board.map((square, index) => (
          <Square
            key={uuid()}
            value={square}
            onClick={() => handleClick(index)}
          />
        ))}
      </div>
      <button className="btn" onClick={() => onStartNewGame()}>
        Start New Game
      </button>
    </>
  )
}
