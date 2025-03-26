"use client"

import { motion } from "framer-motion"
import { X, Circle } from "lucide-react"

interface SquareProps {
  value: string | null
  onSquareClick: () => void
  isWinningSquare: boolean
  xIsNext: boolean
}

export default function Square({ value, onSquareClick, isWinningSquare, xIsNext }: SquareProps) {
  return (
    <motion.button
      className={`w-full aspect-square flex items-center justify-center text-4xl font-bold rounded-lg 
  ${isWinningSquare ? "bg-green-500 shadow-[0_0_15px_rgba(34,197,94,0.7)]" : "bg-gray-800 border border-gray-700"} 
  ${!value ? "hover:bg-gray-700 hover:border-gray-500 hover:shadow-[0_0_10px_rgba(255,255,255,0.2)]" : ""}
  transition-all duration-300 ease-in-out`}
      onClick={onSquareClick}
      whileHover={!value ? { scale: 1.05 } : {}}
      whileTap={!value ? { scale: 0.95 } : {}}
    >
      {value ? (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className={`${
            isWinningSquare
              ? "text-green-400 filter drop-shadow-[0_0_8px_rgba(74,222,128,0.8)]"
              : value === "X"
                ? "text-cyan-400 filter drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]"
                : "text-pink-400 filter drop-shadow-[0_0_8px_rgba(244,114,182,0.8)]"
          }`}
        >
          {value === "X" ? <X className="w-10 h-10" /> : <Circle className="w-10 h-10" />}
        </motion.div>
      ) : (
        <motion.div className="w-10 h-10 opacity-10" initial={{ opacity: 0 }} animate={{ opacity: 0.1 }}>
          {xIsNext ? (
            <X className="w-full h-full text-cyan-500 opacity-50" />
          ) : (
            <Circle className="w-full h-full text-pink-500 opacity-50" />
          )}
        </motion.div>
      )}
    </motion.button>
  )
}

