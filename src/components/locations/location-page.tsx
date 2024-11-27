'use client';

import React from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import type { LocationData } from "@/app/(pages)/locations/location-data";

interface LocationPageProps {
  location: LocationData;
}

export function LocationPage({ location }: LocationPageProps) {
  const defaultContent = {
    h2s: [
      `Complete Toilet Hire Solutions for ${location.name}`,
      'Comprehensive Range of Facilities',
      `Areas We Cover Around ${location.name}`,
      'Our Service Guarantees',
      'Competitive Hire Rates'
    ],
    content: `Welcome to Chelford Mobile Services, your trusted provider of professional toilet hire solutions in ${location.name} and surrounding areas. We understand that every event and project has unique requirements, which is why we offer a comprehensive range of portable toilet facilities to meet your specific needs.

Our extensive service area covers ${location.areas.join(', ')}, ensuring reliable and prompt delivery wherever you need us. With years of experience serving the ${location.name} region, we've built a reputation for excellence in both our facilities and customer service.

We provide a diverse range of toilet hire options including standard portable toilets, luxury toilet trailers, disabled access facilities, and specialized solutions for construction sites. All our units are regularly maintained and serviced to the highest standards of hygiene and comfort.

What sets us apart in ${location.name}:
• Local expertise and rapid response times
• 24/7 emergency support and maintenance
• Competitive pricing with no hidden costs
• Full service including delivery, setup, and collection
• Regular cleaning and servicing included
• Flexible hire periods to suit your needs

Whether you're planning a wedding in ${location.areas[0]}, managing a construction project in ${location.areas[1]}, or organizing a public event in ${location.areas[2]}, we have the perfect solution for your requirements. Contact us today to discuss your needs and receive a tailored quote.`
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Professional Toilet Hire Services in {location.name}
          </h1>
          <p className="text-lg text-gray-600">
            Professional toilet hire services in {location.name}. Quality facilities for events, construction sites, and more. Local, reliable service with 24/7 support.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <div className="prose max-w-none">
            {defaultContent.h2s.map((heading, index) => (
              <section key={index} className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">{heading}</h2>
                {index === 0 && (
                  <div className="content space-y-4">
                    {defaultContent.content.split('\n\n').map((paragraph, pIndex) => (
                      <p key={pIndex} className="text-gray-700 leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                )}
              </section>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Areas We Cover in {location.name}</h2>
            <ul className="grid grid-cols-2 gap-2">
              {location.areas.map((area) => (
                <li key={area} className="flex items-center text-gray-700">
                  <MapPin className="h-4 w-4 text-[#0891b2] mr-2" />
                  {area}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Us</h2>
            <div className="space-y-4">
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-[#0891b2] mr-3" />
                <Link href="tel:07534362251" className="text-gray-700 hover:text-[#0891b2]">
                  07534 362251
                </Link>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-[#0891b2] mr-3" />
                <Link href="mailto:info@chelfordmobileservices.co.uk" className="text-gray-700 hover:text-[#0891b2]">
                  info@chelfordmobileservices.co.uk
                </Link>
              </div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 text-[#0891b2] mr-3" />
                <span className="text-gray-700">24/7 Emergency Support</span>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Link
            href="/contact"
            className={cn(
              "inline-flex items-center justify-center rounded-full bg-[#0891b2] px-6 py-3 text-base font-medium text-white",
              "hover:bg-[#0891b2]/90 transition-all duration-200 transform hover:scale-105",
              "focus:outline-none focus:ring-2 focus:ring-[#0891b2] focus:ring-offset-2"
            )}
          >
            Get a Quote
          </Link>
          <p className="mt-4 text-sm text-gray-600">
            Fast response • Competitive rates • Professional service
          </p>
        </div>
      </div>
    </div>
  );
}
