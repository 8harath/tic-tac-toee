"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Trophy, Frown, RotateCcw, LogOut } from "lucide-react"

interface GameOverModalProps {
  winner: string | null
  isDraw: boolean
  onReset: () => void
  onExit: () => void
}

export default function GameOverModal({ winner, isDraw, onReset, onExit }: GameOverModalProps) {
  return (
    <motion.div
      className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="bg-gray-900 border border-gray-800 rounded-xl p-6 max-w-sm w-full mx-4 shadow-[0_0_30px_rgba(0,0,0,0.5)]"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
      >
        <div className="text-center mb-6">
          {winner ? (
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col items-center"
            >
              <div className="w-16 h-16 rounded-full bg-green-900/50 flex items-center justify-center mb-4 border border-green-500 shadow-[0_0_15px_rgba(34,197,94,0.5)]">
                <Trophy className="w-8 h-8 text-green-400 filter drop-shadow-[0_0_5px_rgba(74,222,128,0.8)]" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-2 filter drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
                Game Over!
              </h2>
              <p className="text-green-300">
                Player{" "}
                <span className="font-bold text-green-400 filter drop-shadow-[0_0_5px_rgba(74,222,128,0.8)]">
                  {winner}
                </span>{" "}
                wins!
              </p>
            </motion.div>
          ) : (
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col items-center"
            >
              <div className="w-16 h-16 rounded-full bg-purple-900/50 flex items-center justify-center mb-4 border border-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.5)]">
                <Frown className="w-8 h-8 text-purple-400 filter drop-shadow-[0_0_5px_rgba(168,85,247,0.8)]" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-2 filter drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
                Game Over!
              </h2>
              <p className="text-purple-300">It's a draw!</p>
            </motion.div>
          )}
        </div>

        <motion.div
          className="flex flex-col gap-3"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <Button
            onClick={onReset}
            className="w-full flex items-center justify-center gap-2 bg-green-600 hover:bg-green-500 text-white shadow-[0_0_10px_rgba(34,197,94,0.5)] hover:shadow-[0_0_15px_rgba(34,197,94,0.7)] transition-all"
          >
            <RotateCcw className="w-4 h-4" />
            Play Again
          </Button>
          <Button
            variant="outline"
            onClick={onExit}
            className="w-full flex items-center justify-center gap-2 border-purple-500 text-purple-400 hover:bg-purple-950 hover:text-purple-300 shadow-[0_0_10px_rgba(168,85,247,0.3)] hover:shadow-[0_0_15px_rgba(168,85,247,0.5)] transition-all"
          >
            <LogOut className="w-4 h-4" />
            Exit Game
          </Button>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

