"use client";

import Link from "next/link";
import { Phone, Truck, Calendar, Award } from "lucide-react";
import { useEffect, useState } from "react";

const services = [
  {
    title: "Standard Portable Toilets",
    description: "Ideal for construction sites and outdoor events",
    href: "/services/portable-toilet-hire",
    icon: Truck,
    delay: "animation-delay-100"
  },
  {
    title: "Luxury Toilet Trailers",
    description: "Perfect for weddings and corporate events",
    href: "/services/luxury-toilet-hire",
    icon: Award,
    delay: "animation-delay-200"
  },
  {
    title: "Event Solutions",
    description: "Comprehensive solutions for festivals and large gatherings",
    href: "/services/event-solutions",
    icon: Calendar,
    delay: "animation-delay-300"
  }
];

const HomeContent = () => {
  const [location, setLocation] = useState<string>("");

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const response = await fetch('/api/ip');
        const data = await response.json();
        if (data.location && data.location !== 'Unknown Location') {
          setLocation(data.location);
        }
      } catch (error) {
        console.error('Error fetching location:', error);
      }
    };

    fetchLocation();
  }, []);

  return (
    <div className="flex flex-col">
      <section className="relative bg-background py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-5" />
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="w-full lg:w-[55%]">
              <h1 className="animate-fade-in text-4xl md:text-7xl font-bold text-foreground dark:text-primary mb-6">
                PORTABLE TOILET HIRE
                {location && (
                  <span className="block text-2xl md:text-4xl text-primary mt-4 animate-fade-in animation-delay-50">
                    In {location}
                  </span>
                )}
                <span className="block text-2xl md:text-4xl text-primary mt-4 animate-fade-in animation-delay-100">
                  CLEAN, RELIABLE, AFFORDABLE
                </span>
              </h1>
              <p className="text-xl text-muted-foreground dark:text-primary/80 mb-12 animate-fade-in animation-delay-200">
                Professional toilet hire solutions for events, construction sites, and special occasions across Cheshire and surrounding areas.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 animate-fade-in animation-delay-300">
                <Link
                  href="/contact"
                  className="group bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-full font-semibold transition-all duration-300 text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  <span className="flex items-center justify-center">
                    Get Quote
                    <svg className="w-5 h-5 ml-2 transform transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </Link>
                <Link
                  href="/services"
                  className="group bg-background text-primary border-primary hover:bg-primary/5 px-8 py-4 rounded-full font-semibold border-2 transition-all duration-300 text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  <span className="flex items-center justify-center">
                    Learn More
                    <svg className="w-5 h-5 ml-2 transform transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
            <div className="w-full lg:w-[45%] animate-fade-in animation-delay-400">
              <img
                src="/images/cmstoilethire.jpg"
                alt="CMS Toilet Hire Services"
                className="w-full h-[400px] object-cover rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {services.map((service, index) => (
              <div key={index} className={`text-center p-8 group hover:bg-primary/5 rounded-2xl transition-all duration-300 animate-fade-in ${service.delay}`}>
                <div className="w-20 h-20 bg-primary/10 group-hover:bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6 transition-colors">
                  <service.icon className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-foreground dark:text-primary">{service.title}</h3>
                <p className="text-muted-foreground dark:text-primary/80 text-lg">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 animate-fade-in text-foreground dark:text-primary">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link key={index} href={service.href} className={`group animate-fade-in ${service.delay}`}>
                <div className="bg-background p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <h3 className="text-2xl font-semibold mb-4 text-foreground dark:text-primary group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground dark:text-primary/80 text-lg">{service.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 animate-fade-in">
            Ready to Book Your Toilet Hire?
          </h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto animate-fade-in animation-delay-100">
            Contact us today for a free quote and expert advice
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in animation-delay-200">
            <Link
              href="tel:07534362251"
              className="group inline-flex items-center justify-center bg-background text-primary hover:bg-background/90 px-8 py-4 rounded-full font-semibold transition-all duration-300 text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              <Phone className="w-6 h-6 mr-3" />
              <span>Call Now</span>
            </Link>
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center bg-transparent text-primary-foreground px-8 py-4 rounded-full font-semibold border-2 border-primary-foreground hover:bg-background hover:text-primary transition-all duration-300 text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              <Calendar className="w-6 h-6 mr-3" />
              <span>Book Online</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeContent;
