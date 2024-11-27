"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "./theme-provider"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className={`
        rounded-full p-2 transition-colors duration-200
        hover:bg-[#0891b2]/10 hover:text-[#0891b2]
        focus:outline-none focus:ring-2 focus:ring-[#0891b2] focus:ring-offset-2
        ${theme === "dark" ? "text-white" : "text-yellow-500"}
      `}
      aria-label="Toggle theme"
    >
      <Sun className={`h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0`} />
      <Moon className={`absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100`} />
      <span className="sr-only">Toggle theme</span>
    </button>
  )
}
