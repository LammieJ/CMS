"use client"

import { MotionSection } from "@/components/ui/motion-section"
import Image from "next/image"
import Link from "next/link"

export default function ServicesPage() {
  const services = [
    {
      title: "Portable Toilet Hire",
      description: "Standard portable toilets suitable for construction sites and outdoor events.",
      image: "/images/portable-toilet.svg",
      link: "/services/portable-toilet-hire"
    },
    {
      title: "Luxury Toilet Hire",
      description: "Premium toilet trailers perfect for weddings and corporate events.",
      image: "/images/luxury-toilet.svg",
      link: "/services/luxury-toilet-hire"
    },
    {
      title: "Event Toilet Hire",
      description: "Specialized toilet solutions for events of any size.",
      image: "/images/event-toilets.svg",
      link: "/services/event-toilet-hire"
    },
    {
      title: "Event Solutions",
      description: "Complete sanitation solutions for festivals and large-scale events.",
      image: "/images/event-toilets.svg",
      link: "/services/event-solutions"
    }
  ]

  return (
    <div className="container mx-auto px-4 py-16">
      <MotionSection className="text-center mb-16">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6">Our Services</h1>
        <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
          Professional toilet hire solutions for every occasion. From construction sites to luxury events,
          we have the perfect solution for your needs.
        </p>
      </MotionSection>

      <MotionSection 
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
        stagger={true}
      >
        {services.map((service, index) => (
          <Link 
            key={index}
            href={service.link}
            className="block group"
          >
            <div className="p-6 rounded-lg border border-primary/20 backdrop-blur-sm transition-all duration-300 hover:border-primary/40 hover:shadow-lg">
              <Image
                src={service.image}
                alt={service.title}
                width={64}
                height={64}
                className="mb-4"
              />
              <h2 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                {service.title}
              </h2>
              <p className="text-muted-foreground">
                {service.description}
              </p>
            </div>
          </Link>
        ))}
      </MotionSection>

      <MotionSection className="text-center mt-16" delay={0.4}>
        <h2 className="text-3xl font-bold mb-8">Need Help Choosing?</h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Not sure which service is right for you? Contact us for expert advice
          tailored to your specific needs.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 rounded-lg font-medium text-lg"
        >
          Get in Touch →
        </Link>
      </MotionSection>
    </div>
  )
}
