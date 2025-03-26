"use client"

import { motion } from "framer-motion"

interface GameStatusProps {
  status: string
}

export default function GameStatus({ status }: GameStatusProps) {
  return (
    <motion.div
      className="mb-4 text-center font-bold text-lg text-white"
      key={status} // This forces re-animation when status changes
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
      style={{
        textShadow: status.includes("Winner")
          ? "0 0 10px rgba(34, 197, 94, 0.8), 0 0 20px rgba(34, 197, 94, 0.5)"
          : status.includes("Next player: X")
            ? "0 0 10px rgba(34, 211, 238, 0.8), 0 0 20px rgba(34, 211, 238, 0.5)"
            : "0 0 10px rgba(244, 114, 182, 0.8), 0 0 20px rgba(244, 114, 182, 0.5)",
      }}
    >
      {status}
    </motion.div>
  )
}

