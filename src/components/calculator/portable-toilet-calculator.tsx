"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { toast } from 'sonner'

interface CalculatorResult {
  toilets: number
  price: number
  duration: number
  guests: number
  type: string
}

export function PortableToiletCalculator() {
  const [guests, setGuests] = useState<number>(100)
  const [duration, setDuration] = useState<number>(4)
  const [type, setType] = useState<string>('standard')
  const [result, setResult] = useState<CalculatorResult | null>(null)
  const [loading, setLoading] = useState(false)

  const calculateToilets = async () => {
    setLoading(true)
    try {
      const response = await fetch('/api/calculator', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          guests,
          duration,
          type,
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to calculate')
      }

      const data = await response.json()
      setResult(data)
      
    } catch {
      toast.error('Failed to calculate. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="grid gap-8 md:grid-cols-2">
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-2">
              Number of Guests
            </label>
            <input
              type="number"
              min="1"
              value={guests}
              onChange={(e) => setGuests(Number(e.target.value))}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Event Duration (hours)
            </label>
            <input
              type="number"
              min="1"
              value={duration}
              onChange={(e) => setDuration(Number(e.target.value))}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Toilet Type
            </label>
            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary"
            >
              <option value="standard">Standard Portable Toilet</option>
              <option value="luxury">Luxury Toilet Trailer</option>
              <option value="disabled">Disabled Access Toilet</option>
            </select>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={calculateToilets}
            disabled={loading}
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 rounded-lg font-medium"
          >
            {loading ? 'Calculating...' : 'Calculate'}
          </motion.button>
        </div>

        <div className="bg-card p-6 rounded-lg border">
          <h3 className="text-xl font-semibold mb-4">Recommendation</h3>
          {result ? (
            <div className="space-y-4">
              <p>Based on {result.guests} guests over {result.duration} hours:</p>
              <div className="text-3xl font-bold text-primary">
                {result.toilets} {result.type} {result.toilets === 1 ? 'Unit' : 'Units'}
              </div>
              <p className="text-2xl font-semibold">
                Estimated Cost: £{result.price}
              </p>
              <p className="text-sm text-muted-foreground">
                This is an estimate. Final pricing may vary based on specific requirements and location.
              </p>
              <div className="pt-4">
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href="/contact"
                  className="block text-center bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 rounded-lg font-medium"
                >
                  Get Exact Quote
                </motion.a>
              </div>
            </div>
          ) : (
            <p className="text-muted-foreground">
              Enter your event details to get a recommendation and estimate.
            </p>
          )}
        </div>
      </div>
    </div>
  )
}
