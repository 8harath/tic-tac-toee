"use client"

import { motion } from "framer-motion"
import { RotateCcw, LogOut } from "lucide-react"
import { Button } from "@/components/ui/button"

interface GameControlsProps {
  onReset: () => void
  onExit: () => void
}

export default function GameControls({ onReset, onExit }: GameControlsProps) {
  return (
    <motion.div
      className="flex justify-center gap-4 mt-4 game-controls"
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.5 }}
    >
      <Button
        variant="outline"
        onClick={onReset}
        className="flex items-center gap-2 border-cyan-500 text-cyan-400 hover:bg-cyan-950 hover:text-cyan-300 shadow-[0_0_10px_rgba(34,211,238,0.3)] hover:shadow-[0_0_15px_rgba(34,211,238,0.5)] transition-all"
      >
        <RotateCcw className="w-4 h-4" />
        Reset Game
      </Button>

      <Button
        variant="outline"
        onClick={onExit}
        className="flex items-center gap-2 border-purple-500 text-purple-400 hover:bg-purple-950 hover:text-purple-300 shadow-[0_0_10px_rgba(168,85,247,0.3)] hover:shadow-[0_0_15px_rgba(168,85,247,0.5)] transition-all"
      >
        <LogOut className="w-4 h-4" />
        Exit Game
      </Button>
    </motion.div>
  )
}

