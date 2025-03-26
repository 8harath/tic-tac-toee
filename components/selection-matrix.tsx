"use client"

import { cn } from "@/lib/utils"

interface SelectionMatrixProps {
  rows: number
  columns: number
  selectedItems: Record<string, string>
  onSelect: (id: string) => void
  className?: string
  cellClassName?: string
}

export default function SelectionMatrix({
  rows,
  columns,
  selectedItems,
  onSelect,
  className,
  cellClassName,
}: SelectionMatrixProps) {
  // Generate grid cells
  const cells = []

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < columns; col++) {
      const id = `${row}-${col}`
      const isSelected = id in selectedItems
      const content = selectedItems[id]

      cells.push(
        <div
          key={id}
          onClick={() => onSelect(id)}
          className={cn(
            // Base styles for all cells
            "border rounded-md flex items-center justify-center transition-all duration-200",
            "cursor-pointer select-none",

            // Empty state - clean and minimal
            !isSelected &&
              "border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-800/50",

            // Selected state - visually distinct
            isSelected && "border-primary border-2 bg-primary/5 shadow-sm",

            // Custom cell class
            cellClassName || "p-4 min-h-[60px]",
          )}
          role="button"
          tabIndex={0}
          aria-pressed={isSelected}
        >
          {/* Only show content if the cell is selected */}
          {isSelected && (
            <span
              className={cn(
                "text-primary font-medium",
                content === "X" ? "text-blue-600 dark:text-blue-400" : "text-rose-600 dark:text-rose-400",
              )}
            >
              {content}
            </span>
          )}
        </div>,
      )
    }
  }

  return (
    <div className={cn("grid gap-2", className)} style={{ gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))` }}>
      {cells}
    </div>
  )
}

