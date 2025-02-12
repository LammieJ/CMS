"use client"

import { useEffect, useRef } from 'react'
import { Loader } from '@googlemaps/js-api-loader'

interface ServiceAreaMapProps {
  center: {
    lat: number
    lng: number
  }
  radius: number // in miles
}

export function ServiceAreaMap({ center, radius }: ServiceAreaMapProps) {
  const mapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const initMap = async () => {
      const loader = new Loader({
        apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '',
        version: 'weekly',
        libraries: ['places', 'geometry']
      })

      try {
        const google = await loader.load()
        
        if (!mapRef.current) return

        const map = new google.maps.Map(mapRef.current, {
          center,
          zoom: 9,
          styles: [
            {
              featureType: 'water',
              elementType: 'geometry',
              stylers: [{ color: '#e9e9e9' }, { lightness: 17 }]
            },
            {
              featureType: 'landscape',
              elementType: 'geometry',
              stylers: [{ color: '#f5f5f5' }, { lightness: 20 }]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry.fill',
              stylers: [{ color: '#ffffff' }, { lightness: 17 }]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry.stroke',
              stylers: [{ color: '#ffffff' }, { lightness: 29 }, { weight: 0.2 }]
            },
            {
              featureType: 'road.arterial',
              elementType: 'geometry',
              stylers: [{ color: '#ffffff' }, { lightness: 18 }]
            },
            {
              featureType: 'road.local',
              elementType: 'geometry',
              stylers: [{ color: '#ffffff' }, { lightness: 16 }]
            },
            {
              featureType: 'poi',
              elementType: 'geometry',
              stylers: [{ color: '#f5f5f5' }, { lightness: 21 }]
            },
            {
              featureType: 'poi.park',
              elementType: 'geometry',
              stylers: [{ color: '#dedede' }, { lightness: 21 }]
            },
            {
              elementType: 'labels.text.stroke',
              stylers: [{ visibility: 'on' }, { color: '#ffffff' }, { lightness: 16 }]
            },
            {
              elementType: 'labels.text.fill',
              stylers: [{ saturation: 36 }, { color: '#333333' }, { lightness: 40 }]
            },
            {
              elementType: 'labels.icon',
              stylers: [{ visibility: 'off' }]
            },
            {
              featureType: 'transit',
              elementType: 'geometry',
              stylers: [{ color: '#f2f2f2' }, { lightness: 19 }]
            },
            {
              featureType: 'administrative',
              elementType: 'geometry.fill',
              stylers: [{ color: '#fefefe' }, { lightness: 20 }]
            },
            {
              featureType: 'administrative',
              elementType: 'geometry.stroke',
              stylers: [{ color: '#fefefe' }, { lightness: 17 }, { weight: 1.2 }]
            }
          ]
        })

        // Add marker for center point
        new google.maps.Marker({
          position: center,
          map,
          icon: {
            path: google.maps.SymbolPath.CIRCLE,
            scale: 10,
            fillColor: '#0891b2',
            fillOpacity: 1,
            strokeColor: '#ffffff',
            strokeWeight: 2
          }
        })

        // Add service area circle
        new google.maps.Circle({
          map,
          center,
          radius: radius * 1609.34, // Convert miles to meters
          fillColor: '#0891b2',
          fillOpacity: 0.1,
          strokeColor: '#0891b2',
          strokeOpacity: 0.8,
          strokeWeight: 2
        })

      } catch (error) {
        console.error('Error loading Google Maps:', error)
      }
    }

    initMap()
  }, [center, radius])

  return (
    <div 
      ref={mapRef} 
      className="w-full h-[400px] sm:h-[500px] lg:h-[600px] rounded-lg overflow-hidden shadow-lg"
    />
  )
}
