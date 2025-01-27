'use client';

import React from 'react';
import { notFound } from 'next/navigation';
import { MapPin } from 'lucide-react';
import Link from 'next/link';
import Script from 'next/script';
import Image from 'next/image';
import { locationData } from '../location-data';
import { cn } from '@/lib/utils';
import { generateLocationSchema } from './metadata';

export default function LocationPage({ params }: { params: { slug: string } }) {
  const location = locationData[params.slug];

  if (!location) {
    notFound();
  }

  // Create the contact URL with location and message parameters
  const contactUrl = `/contact?location=${encodeURIComponent(location.name)}&message=${encodeURIComponent(`Enquiry from ${location.name} location page`)}`;

  const locationSchema = generateLocationSchema(location.name, location.areas);

  return (
    <div className="container mx-auto px-4 py-12">
      <Script
        id="location-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(locationSchema) }}
      />
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center gap-4 mb-6 relative">
            <div className="absolute -top-24 left-0" id="top"></div>
            <MapPin className="h-8 w-8 text-[#0891b2]" />
            <h1 className="text-3xl font-bold">
              Portable Toilet Hire & Waste Services in {location.name}
            </h1>
          </div>

          <div className="prose prose-lg max-w-none" itemScope itemType="https://schema.org/Article">
            <meta itemProp="name" content={`Portable Toilet Hire in ${location.name}`} />
            <meta itemProp="description" content={`Professional portable toilet and waste management solutions in ${location.name} and surrounding areas.`} />
            <p className="dark:text-primary mb-6">
              CMS Toilet Hire delivers comprehensive portable toilet and waste management solutions in {location.name} and surrounding areas. 
              With over 20 years of experience, we specialize in both toilet hire and professional waste services, ensuring your site 
              remains compliant and hygienic at all times.
            </p>

            <h2 className="text-2xl font-semibold mb-4">
              Areas We Cover in {location.name}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              {location.areas.map((area) => (
                <div
                  key={area}
                  className={cn(
                    "p-3 rounded-md bg-gray-50",
                    "border border-gray-200",
                    "dark:text-primary text-sm"
                  )}
                >
                  {area}
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-semibold mb-4">
              Our Comprehensive Services
            </h2>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-[#0891b2] mb-3">
                Toilet Hire Solutions
              </h3>
              <ul className="space-y-3 dark:text-primary">
                <li className="flex items-center gap-2">
                  • Standard Portable Toilets - Ideal for construction sites and outdoor events
                </li>
                <li className="flex items-center gap-2">
                  • Luxury Toilet Units - Perfect for weddings and corporate events
                </li>
                <li className="flex items-center gap-2">
                  • Disabled Access Toilets - Ensuring accessibility for all users
                </li>
                <li className="flex items-center gap-2">
                  • Event Toilet Trailers - Suitable for large-scale events
                </li>
                <li className="flex items-center gap-2">
                  • Welfare Units - Complete site welfare solutions
                </li>
              </ul>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold text-[#0891b2] mb-3">
                Professional Waste Services
              </h3>
              <ul className="space-y-3 dark:text-primary">
                <li className="flex items-center gap-2">
                  • Portable Toilet Servicing - Regular maintenance and cleaning
                </li>
                <li className="flex items-center gap-2">
                  • Wet Waste Disposal - Licensed disposal of liquid waste
                </li>
                <li className="flex items-center gap-2">
                  • Welfare Unit Servicing - Complete maintenance service
                </li>
                <li className="flex items-center gap-2">
                  • Toilet Trailer Servicing - Professional cleaning and maintenance
                </li>
                <li className="flex items-center gap-2">
                  • Emergency Call-outs - 24/7 response service
                </li>
              </ul>
            </div>

            <div className="mt-8 p-4 bg-[#f0f9ff] rounded-lg border border-[#bae6fd]">
              <h3 className="text-xl font-semibold text-[#0891b2] mb-2">
                Why Choose CMS Toilet Hire in {location.name}?
              </h3>
              <ul className="space-y-2 dark:text-primary">
                <li>• Over 20 years of industry experience</li>
                <li>• Full waste carrier license and environmental compliance</li>
                <li>• Same-day delivery and collection available</li>
                <li>• Regular servicing with documented maintenance records</li>
                <li>• Competitive pricing with no hidden charges</li>
                <li>• 24/7 emergency support and rapid response</li>
                <li>• Comprehensive insurance coverage</li>
                <li>• Expert advice on site requirements and regulations</li>
              </ul>
            </div>

            <div className="mt-8 p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="text-xl font-semibold mb-2">
                Industries We Serve
              </h3>
              <ul className="space-y-2 dark:text-primary">
                <li>• Construction and Building Sites</li>
                <li>• Events and Festivals</li>
                <li>• Weddings and Private Functions</li>
                <li>• Agricultural and Rural Settings</li>
                <li>• Industrial and Commercial Sites</li>
                <li>• Emergency and Disaster Response</li>
              </ul>
            </div>

            <div className="mt-12 mb-8">
              <h2 className="text-2xl font-semibold mb-4">Gallery</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="relative h-48 rounded-lg overflow-hidden">
                  <Image
                    src="/images/portable-toilet.jpeg"
                    alt={`Standard Portable Toilet in ${location.name}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority
                  />
                </div>
                <div className="relative h-48 rounded-lg overflow-hidden">
                  <Image
                    src="/images/cmstoilethire.jpg"
                    alt={`Luxury Toilet Unit in ${location.name}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="relative h-48 rounded-lg overflow-hidden">
                  <Image
                    src="/images/portable-toilet.svg"
                    alt={`Event Toilet Solutions in ${location.name}`}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <a href="#top" className="text-[#0891b2] hover:underline mb-8 inline-block">
                Back to Top
              </a>
              <Link
                href={contactUrl}
                className={cn(
                  "inline-block px-8 py-4 text-lg font-semibold",
                  "bg-[#0891b2] text-white rounded-lg",
                  "hover:bg-[#0891b2]/90 transition-colors",
                  "shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all"
                )}
              >
                Get a Quote for {location.name}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
