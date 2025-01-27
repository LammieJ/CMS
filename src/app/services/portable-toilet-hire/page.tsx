"use client"

import { MotionSection } from "@/components/ui/motion-section"
import Image from "next/image"
import Link from "next/link"

export default function PortableToiletHirePage() {
  const features = [
    {
      title: "HSE Compliant",
      description: "Fully compliant with Health & Safety regulations for construction sites"
    },
    {
      title: "Weekly Servicing",
      description: "Professional cleaning, waste removal, and supply restocking"
    },
    {
      title: "Flexible Hire",
      description: "Short to long-term options with competitive rates"
    },
    {
      title: "Rapid Response",
      description: "Quick delivery and setup within our 40-mile service area"
    }
  ]

  const applications = [
    {
      title: "Construction Sites",
      description: "HSE-compliant facilities for building sites and renovations"
    },
    {
      title: "Industrial Areas",
      description: "Robust units suitable for factories and industrial zones"
    },
    {
      title: "Agricultural Settings",
      description: "Durable solutions for farms and rural locations"
    },
    {
      title: "Remote Locations",
      description: "Accessible facilities for hard-to-reach work sites"
    }
  ]

  const faqs = [
    {
      question: "What is included in your portable toilet hire?",
      answer: "Our portable toilet hire includes delivery, setup, weekly servicing (cleaning, waste removal, and restocking of supplies), and collection. Each unit comes with non-slip flooring, ventilation, internal lighting, paper towel holder, toilet paper holder, and hand sanitiser unit."
    },
    {
      question: "How often are the portable toilets serviced?",
      answer: "We provide weekly servicing as standard, which includes thorough cleaning, waste removal, and restocking of supplies. More frequent servicing can be arranged for high-usage situations."
    },
    {
      question: "Are your portable toilets HSE compliant?",
      answer: "Yes, all our portable toilets meet HSE regulations for construction sites and workplace facilities. They are regularly maintained and include all required features for compliance."
    },
    {
      question: "What areas do you cover?",
      answer: "We provide portable toilet hire services within a 40-mile radius of Chester, covering major areas in Cheshire and surrounding regions."
    },
    {
      question: "Do you offer long-term hire discounts?",
      answer: "Yes, we offer competitive rates for long-term hire with flexible rental periods. Volume discounts are available for multiple units, and we provide special rates for extended hire periods."
    }
  ]

  return (
    <div className="container mx-auto px-4 py-16">
      <MotionSection className="text-center mb-16">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6">Professional Portable Toilet Hire</h1>
        <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
          HSE-compliant portable toilets for construction sites, industrial areas, and remote locations. 
          Reliable, clean, and cost-effective sanitation solutions with comprehensive service support.
        </p>
      </MotionSection>

      <MotionSection className="mb-16" delay={0.2}>
        <div className="relative w-full max-w-4xl mx-auto aspect-[16/9] rounded-lg overflow-hidden">
          <Image
            src="/images/portable-toilet.jpeg"
            alt="HSE Compliant Portable Toilet Unit"
            fill
            className="object-cover"
          />
        </div>
      </MotionSection>

      <MotionSection className="mb-16 text-center">
        <h2 className="text-3xl font-bold mb-8">Why Choose Our Portable Toilets?</h2>
        <div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          style={{opacity: 0.99}}
        >
          {features.map((feature, index) => (
            <div 
              key={index}
              className="p-6 rounded-lg border border-primary/20 backdrop-blur-sm"
            >
              <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </MotionSection>

      <MotionSection className="mb-16" delay={0.4}>
        <h2 className="text-3xl font-bold mb-8 text-center">Perfect For Various Applications</h2>
        <div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          style={{opacity: 0.99}}
        >
          {applications.map((app, index) => (
            <div 
              key={index}
              className="p-6 rounded-lg border border-primary/20 backdrop-blur-sm"
            >
              <h3 className="text-xl font-bold mb-4">{app.title}</h3>
              <p className="text-muted-foreground">{app.description}</p>
            </div>
          ))}
        </div>
      </MotionSection>

      <MotionSection className="mb-16" delay={0.6}>
        <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-8">
              <h3 className="text-xl font-bold mb-4">{faq.question}</h3>
              <p className="text-muted-foreground">{faq.answer}</p>
            </div>
          ))}
        </div>
      </MotionSection>

      <MotionSection className="text-center bg-primary/5 p-8 rounded-lg" delay={0.8}>
        <h2 className="text-3xl font-bold mb-8">Ready to Hire?</h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Get in touch today for competitive rates and professional advice on your portable toilet requirements.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="inline-block bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 rounded-lg font-medium text-lg"
          >
            Get Quote →
          </Link>
          <Link
            href="tel:+441234567890"
            className="inline-block bg-secondary text-secondary-foreground hover:bg-secondary/90 px-8 py-3 rounded-lg font-medium text-lg"
          >
            Call Us Now <span>📞</span>
          </Link>
        </div>
      </MotionSection>
    </div>
  )
}
