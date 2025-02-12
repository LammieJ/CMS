import { NextResponse } from 'next/server'

interface IpResponse {
  ip: string
  location?: string
}

export async function GET() {
  try {
    const response = await fetch('https://api.ipify.org?format=json')
    const data = await response.json()
    const ip = data.ip

    // Get location from IP
    const geoResponse = await fetch(`https://ipapi.co/${ip}/json/`)
    const geoData = await geoResponse.json()
    
    const location = geoData.error ? undefined : `${geoData.city}, ${geoData.region}`

    const result: IpResponse = {
      ip,
      location
    }

    return NextResponse.json(result)
  } catch {
    // Log error internally but don't expose details to client
    console.error('Failed to fetch IP or location data')
    return NextResponse.json({ ip: 'Unknown', location: undefined })
  }
}
