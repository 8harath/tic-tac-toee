"use client"

import { useState } from "react"
import SelectionMatrix from "@/components/selection-matrix"
import { Button } from "@/components/ui/button"

export default function Home() {
  const [board, setBoard] = useState<Record<string, string>>({})
  const [currentPlayer, setCurrentPlayer] = useState<"X" | "O">("X")
  const [winner, setWinner] = useState<string | null>(null)

  const winningCombinations = [
    ["0-0", "0-1", "0-2"],
    ["1-0", "1-1", "1-2"],
    ["2-0", "2-1", "2-2"],
    ["0-0", "1-0", "2-0"],
    ["0-1", "1-1", "2-1"],
    ["0-2", "1-2", "2-2"],
    ["0-0", "1-1", "2-2"],
    ["0-2", "1-1", "2-0"],
  ]

  const checkWinner = (newBoard: Record<string, string>) => {
    for (const combo of winningCombinations) {
      if (combo.every((cell) => newBoard[cell] === "X") || combo.every((cell) => newBoard[cell] === "O")) {
        return newBoard[combo[0]]
      }
    }
    return null
  }

  const handleSelect = (id: string) => {
    if (board[id] || winner) return

    const newBoard = { ...board, [id]: currentPlayer }
    setBoard(newBoard)

    const gameWinner = checkWinner(newBoard)
    if (gameWinner) {
      setWinner(gameWinner)
    } else {
      setCurrentPlayer(currentPlayer === "X" ? "O" : "X")
    }
  }

  const resetGame = () => {
    setBoard({})
    setCurrentPlayer("X")
    setWinner(null)
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 md:p-24 bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
      <div className="w-full max-w-md mx-auto space-y-8">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-slate-800 dark:text-slate-100">Tic-Tac-Toe</h1>

        <p className="text-slate-600 dark:text-slate-400 text-center max-w-2xl mx-auto">
          A classic game with clean state management and visual distinction between empty and filled cells.
        </p>

        <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-md">
          <div className="mb-6 text-center">
            {winner ? (
              <p className="text-xl font-medium text-green-600 dark:text-green-400">Player {winner} wins!</p>
            ) : Object.keys(board).length === 9 ? (
              <p className="text-xl font-medium text-amber-600 dark:text-amber-400">Game ended in a draw!</p>
            ) : (
              <p className="text-xl font-medium text-slate-700 dark:text-slate-300">
                Current player: <span className="font-bold">{currentPlayer}</span>
              </p>
            )}
          </div>

          <SelectionMatrix
            rows={3}
            columns={3}
            selectedItems={board}
            onSelect={handleSelect}
            className="mb-6 max-w-xs mx-auto"
            cellClassName="aspect-square text-2xl font-bold"
          />

          <div className="flex justify-center">
            <Button onClick={resetGame} size="lg">
              New Game
            </Button>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-md">
          <h3 className="text-lg font-medium mb-3 text-slate-800 dark:text-slate-100">Design Principles</h3>
          <ul className="list-disc pl-5 space-y-2 text-slate-600 dark:text-slate-400">
            <li>
              <strong>Empty State:</strong> Cells remain completely blank until selected, with no placeholder text or
              markings
            </li>
            <li>
              <strong>Selected State:</strong> Filled cells feature a distinct border, subtle background, and clear X or
              O marking
            </li>
            <li>
              <strong>Visual Feedback:</strong> Hover effects provide interactive cues without cluttering the interface
            </li>
            <li>
              <strong>Responsive Design:</strong> The game board adapts to different screen sizes while maintaining
              proportions
            </li>
          </ul>
        </div>
      </div>
    </main>
  )
}

