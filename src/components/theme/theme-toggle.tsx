"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export function ThemeToggle() {
  const [mounted, setMounted] = React.useState(false)
  const [showHighlight, setShowHighlight] = React.useState(false)
  const { theme, setTheme } = useTheme()

  React.useEffect(() => {
    setMounted(true)
    // Check if user has seen the highlight before
    const hasSeenHighlight = localStorage.getItem('hasSeenThemeHighlight')
    if (!hasSeenHighlight) {
      setShowHighlight(true)
      // Hide highlight after 10 seconds
      const timer = setTimeout(() => {
        setShowHighlight(false)
        localStorage.setItem('hasSeenThemeHighlight', 'true')
      }, 10000)
      return () => clearTimeout(timer)
    }
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <button
      onClick={() => {
        setTheme(theme === "dark" ? "light" : "dark")
        if (showHighlight) {
          setShowHighlight(false)
          localStorage.setItem('hasSeenThemeHighlight', 'true')
        }
      }}
      className={`
        relative h-10 w-10 rounded-lg
        bg-background/90 backdrop-blur-sm
        hover:bg-primary/10 hover:text-primary
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary
        transition-all duration-300 ease-in-out
        transform hover:scale-105
        ${theme === "dark" ? 'text-primary border border-primary/20' : 'text-primary/80 border border-primary/10'}
        ${showHighlight ? 'ring-4 ring-[#00ffd5] animate-pulse' : ''}
      `}
      aria-label="Toggle theme"
    >
      <div className="relative h-5 w-5 mx-auto">
        {theme === "dark" ? (
          <Moon className="h-5 w-5" />
        ) : (
          <Sun className="h-5 w-5" />
        )}
      </div>
      <span className="sr-only">
        {theme === "dark" ? 'Switch to light theme' : 'Switch to dark theme'}
      </span>
    </button>
  )
}
