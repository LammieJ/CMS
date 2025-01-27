'use client';

import { useEffect, useRef, useState } from 'react';
import { Loader } from '@googlemaps/js-api-loader';
import { LocationData } from '@/app/(pages)/locations/location-data';
import { MapPin } from 'lucide-react';

interface ServiceAreaMapProps {
  locations: LocationData[];
  apiKey: string;
  center?: { lat: number; lng: number };
  zoom?: number;
}

export default function ServiceAreaMap({ 
  locations,
  apiKey,
  center = { lat: 53.1937, lng: -2.8937 }, // Chester coordinates as default center
  zoom = 9
}: ServiceAreaMapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!apiKey) {
      setError('Map visualization coming soon');
      return;
    }

    const loader = new Loader({
      apiKey,
      version: 'weekly',
      libraries: ['places', 'geometry']
    });

    loader.load().then(() => {
      if (mapRef.current && !map) {
        const mapInstance = new google.maps.Map(mapRef.current, {
          center,
          zoom,
          styles: [
            {
              featureType: 'all',
              elementType: 'geometry',
              stylers: [{ color: '#242f3e' }]
            },
            {
              featureType: 'all',
              elementType: 'labels.text.stroke',
              stylers: [{ color: '#242f3e' }]
            },
            {
              featureType: 'all',
              elementType: 'labels.text.fill',
              stylers: [{ color: '#746855' }]
            },
            {
              featureType: 'water',
              elementType: 'geometry',
              stylers: [{ color: '#17263c' }]
            }
          ],
          disableDefaultUI: true,
          zoomControl: true
        });

        // Create a circle representing the service radius
        const serviceCircle = new google.maps.Circle({
          strokeColor: '#0891b2',
          strokeOpacity: 0.8,
          strokeWeight: 2,
          fillColor: '#0891b2',
          fillOpacity: 0.1,
          map: mapInstance,
          center: center,
          radius: 64374 // 40 miles in meters
        });

        // Add markers for each location
        locations.forEach(location => {
          // Use Geocoding service to get coordinates
          const geocoder = new google.maps.Geocoder();
          geocoder.geocode(
            { address: `${location.name}, UK` },
            (results: google.maps.GeocoderResult[] | null, status: google.maps.GeocoderStatus) => {
              if (status === 'OK' && results && results[0]) {
                const marker = new google.maps.Marker({
                  position: results[0].geometry.location,
                  map: mapInstance,
                  title: location.name,
                  icon: {
                    path: google.maps.SymbolPath.CIRCLE,
                    scale: 8,
                    fillColor: '#0891b2',
                    fillOpacity: 1,
                    strokeColor: '#ffffff',
                    strokeWeight: 2,
                  }
                });

                // Add click listener to marker
                marker.addListener('click', () => {
                  const infoWindow = new google.maps.InfoWindow({
                    content: `
                      <div class="p-2">
                        <h3 class="font-semibold text-lg">${location.name}</h3>
                        <p class="text-sm mt-1">Portable Toilet Hire Services</p>
                        <div class="mt-2">
                          <a href="/locations/${location.slug}" 
                             class="text-[#0891b2] hover:underline text-sm">
                            View Details
                          </a>
                        </div>
                      </div>
                    `
                  });
                  infoWindow.open(mapInstance, marker);
                });
              }
            }
          );
        });

        setMap(mapInstance);
      }
    }).catch(err => {
      setError('Error loading map');
      console.error('Error loading Google Maps:', err);
    });
  }, [apiKey, center, locations, map, zoom]);

  if (error) {
    return (
      <div className="w-full h-[500px] rounded-lg border border-border bg-card">
        <div className="h-full flex flex-col items-center justify-center text-muted-foreground">
          <MapPin className="w-12 h-12 mb-4 text-primary" />
          <p className="text-lg font-medium">{error}</p>
          <p className="mt-2">Serving Cheshire, Merseyside and Greater Manchester</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-[500px] rounded-lg overflow-hidden border border-border">
      <div ref={mapRef} className="w-full h-full" />
    </div>
  );
}
