'use client';

import { useState, useMemo } from 'react';
import { Search } from 'lucide-react';
import { cn } from '@/lib/utils';
import { LocationData } from '@/app/(pages)/locations/location-data';

interface LocationSearchProps {
  locations: LocationData[];
  onLocationSelect?: (location: LocationData) => void;
}

export default function LocationSearch({ locations, onLocationSelect }: LocationSearchProps) {
  const [searchQuery, setSearchQuery] = useState('');
  
  const filteredLocations = useMemo(() => {
    if (!searchQuery.trim()) return [];
    
    const query = searchQuery.toLowerCase().trim();
    return locations.filter(location => 
      location.name.toLowerCase().includes(query) ||
      location.areas.some(area => area.toLowerCase().includes(query))
    ).slice(0, 5); // Limit to top 5 results
  }, [locations, searchQuery]);

  return (
    <div className="w-full max-w-xl mx-auto mb-8">
      <div className="relative">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search for your area..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className={cn(
              "w-full pl-12 pr-4 py-3 rounded-lg",
              "bg-background border border-border",
              "focus:outline-none focus:ring-2 focus:ring-primary",
              "placeholder:text-muted-foreground",
              "transition-colors duration-200"
            )}
          />
        </div>
        
        {filteredLocations.length > 0 && (
          <div className={cn(
            "absolute w-full mt-2 py-2",
            "bg-background border border-border rounded-lg",
            "shadow-lg z-10"
          )}>
            {filteredLocations.map((location) => (
              <button
                key={location.slug}
                onClick={() => {
                  if (onLocationSelect) {
                    onLocationSelect(location);
                  }
                  setSearchQuery('');
                }}
                className={cn(
                  "w-full px-4 py-2 text-left",
                  "hover:bg-accent transition-colors duration-200",
                  "focus:outline-none focus:bg-accent"
                )}
              >
                <span className="font-medium text-foreground">{location.name}</span>
                {location.areas.length > 0 && (
                  <span className="block text-sm text-muted-foreground">
                    Serving: {location.areas.join(', ')}
                  </span>
                )}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
