'use client';

import React, { useState } from "react";
import Link from "next/link";
import { MapPin, ArrowUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { locations } from "./location-data";
import Script from "next/script";
import { locationsSchema } from "./metadata";

export default function LocationsPage() {
  const [sortAscending, setSortAscending] = useState(true);

  const sortedLocations = [...locations].sort((a, b) => {
    return sortAscending 
      ? a.name.localeCompare(b.name)
      : b.name.localeCompare(a.name);
  });

  return (
    <>
      <Script
        id="locations-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(locationsSchema) }}
      />

      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">
            Toilet Hire Locations
          </h1>
          <p className="text-lg dark:text-primary max-w-2xl mx-auto">
            Professional portable toilet hire services available across Chester and surrounding areas. 
            We provide reliable and efficient toilet solutions within a 40-mile radius.
          </p>
        </div>

        <div className="flex justify-end mb-6">
          <button
            onClick={() => setSortAscending(!sortAscending)}
            className={cn(
              "flex items-center gap-2 px-4 py-2 rounded-md",
              "bg-white border border-gray-200 hover:border-[#0891b2]",
              "dark:text-primary hover:text-[#0891b2] transition-colors",
              "focus:outline-none focus:ring-2 focus:ring-[#0891b2] focus:ring-offset-2"
            )}
          >
            <ArrowUpDown className="h-4 w-4" />
            Sort {sortAscending ? "Z to A" : "A to Z"}
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedLocations.map((location) => (
            <Link
              key={location.slug}
              href={`/locations/${location.slug}`}
              className={cn(
                "group relative bg-white p-6 rounded-lg shadow-md",
                "border border-gray-200 hover:border-[#0891b2]",
                "transition-all duration-200 transform hover:-translate-y-1"
              )}
            >
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-xl font-semibold group-hover:text-[#0891b2] transition-colors">
                    {location.name}
                  </h2>
                  <p className="mt-2 dark:text-primary">
                    Portable Toilet Hire in {location.name}
                  </p>
                </div>
                <MapPin className="h-6 w-6 text-[#0891b2] group-hover:scale-110 transition-transform" />
              </div>
              <div className="mt-4">
                <span className="text-sm dark:text-primary">
                  Available Services:
                </span>
                <ul className="mt-2 space-y-1 text-sm dark:text-primary">
                  <li>• Standard Portable Toilets</li>
                  <li>• Luxury Toilet Units</li>
                  <li>• Event Solutions</li>
                </ul>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
