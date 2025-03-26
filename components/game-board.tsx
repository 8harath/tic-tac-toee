"use client"

import { motion } from "framer-motion"
import Square from "./square"

interface GameBoardProps {
  squares: (string | null)[]
  xIsNext: boolean
  onSquareClick: (i: number) => void
  winner: string | null
}

export default function GameBoard({ squares, xIsNext, onSquareClick, winner }: GameBoardProps) {
  // Find winning line if there's a winner
  const winningLine = winner ? findWinningLine(squares) : null

  return (
    <motion.div
      className={`grid grid-cols-3 gap-2 mb-6 relative rounded-xl p-3 game-board ${winner ? "bg-green-900/30 shadow-[0_0_30px_rgba(34,197,94,0.4)]" : ""}`}
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{
        scale: 1,
        opacity: 1,
        boxShadow: winner ? "0 0 30px rgba(34, 197, 94, 0.4)" : "none",
      }}
      transition={{ delay: 0.2, duration: 0.5 }}
    >
      {squares.map((value, i) => (
        <Square
          key={i}
          value={value}
          onSquareClick={() => onSquareClick(i)}
          isWinningSquare={winningLine ? winningLine.includes(i) : false}
          xIsNext={xIsNext}
        />
      ))}
    </motion.div>
  )
}

function findWinningLine(squares: (string | null)[]): number[] | null {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i]
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return lines[i]
    }
  }

  return null
}

