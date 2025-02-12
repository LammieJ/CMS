'use client'

import { useEffect, useRef } from 'react'
import { Loader } from '@googlemaps/js-api-loader'

interface ServiceAreaMapProps {
  center: {
    lat: number
    lng: number
  }
  radius: number
}

export function ServiceAreaMap({ center, radius }: ServiceAreaMapProps) {
  const mapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const loader = new Loader({
      apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '',
      version: 'weekly'
    })

    loader.load().then((google) => {
      if (!mapRef.current) return

      const map = new google.maps.Map(mapRef.current, {
        center,
        zoom: 9,
        styles: [
          {
            featureType: 'poi',
            elementType: 'labels',
            stylers: [{ visibility: 'off' }]
          }
        ]
      })

      // Add service area circle
      new google.maps.Circle({
        map,
        center,
        radius: radius * 1609.34, // Convert miles to meters
        fillColor: '#007bff',
        fillOpacity: 0.1,
        strokeColor: '#007bff',
        strokeOpacity: 0.8,
        strokeWeight: 2
      })

      // Add center marker
      new google.maps.Marker({
        position: center,
        map,
        title: 'Chelford Mobile Services',
        icon: {
          url: '/images/map-marker.svg',
          scaledSize: new google.maps.Size(40, 40)
        }
      })
    })
  }, [center, radius])

  return (
    <div 
      ref={mapRef} 
      className="w-full h-[400px] rounded-lg shadow-sm"
      aria-label="Service Area Map"
    />
  )
}
