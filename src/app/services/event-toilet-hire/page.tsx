"use client"

import { MotionSection } from "@/components/ui/motion-section"
import Image from "next/image"
import Link from "next/link"

export default function EventToiletHirePage() {
  const eventTypes = [
    {
      title: "Festivals & Large Events",
      description: "Comprehensive toilet solutions for festivals and major gatherings",
      features: [
        "Multiple unit configurations",
        "Regular servicing throughout event",
        "Hand washing stations included",
        "Queue management solutions",
        "High-capacity facilities"
      ]
    },
    {
      title: "Outdoor Weddings",
      description: "Elegant facilities for your special day",
      features: [
        "Luxury toilet trailers",
        "Modern, clean facilities",
        "Full attendant service",
        "Vanity units & mirrors",
        "Climate controlled units"
      ]
    },
    {
      title: "Corporate Events",
      description: "Professional facilities for business gatherings",
      features: [
        "Professional appearance",
        "Flexible hire periods",
        "Quick setup and removal",
        "24/7 emergency support",
        "Branded options available"
      ]
    }
  ]

  const specializedUnits = [
    {
      title: "Accessible Toilets",
      description: "DDA compliant facilities ensuring comfort and dignity for all guests",
      features: [
        "Wheelchair accessible",
        "Extra interior space",
        "Support rails",
        "Easy-access ramps",
        "Baby changing facilities"
      ]
    },
    {
      title: "Portable Urinals",
      description: "Efficient solutions for high-traffic events",
      features: [
        "Reduces main toilet queues",
        "Water-saving design",
        "Quick installation",
        "Perfect for festivals",
        "High capacity"
      ]
    }
  ]

  const faqs = [
    {
      question: "How many toilets do I need for my event?",
      answer: "The number of toilets needed depends on your event duration and guest count. As a general guide, we recommend 1 toilet per 75-100 guests for events up to 6 hours. Use our calculator for a precise recommendation based on your specific requirements."
    },
    {
      question: "Do you provide accessible toilets for events?",
      answer: "Yes, we offer DDA compliant accessible toilets suitable for wheelchair users and those with mobility requirements. These units feature extra space, support rails, and easy-access ramps."
    },
    {
      question: "What's included in the event toilet hire service?",
      answer: "Our service includes delivery, setup, all necessary supplies (toilet paper, hand soap, etc.), regular servicing during the event, and collection. We also provide hand washing stations and can include attendant service upon request."
    },
    {
      question: "How often are the toilets serviced during events?",
      answer: "For events lasting multiple days, we provide daily servicing as standard. For high-traffic events, we can arrange more frequent servicing. Each service includes cleaning, waste removal, and restocking of supplies."
    },
    {
      question: "Do you offer luxury options for weddings?",
      answer: "Yes, we provide luxury toilet trailers specifically designed for weddings and upscale events. These feature premium fittings, climate control, vanity units, and can be styled to match your event theme."
    }
  ]

  return (
    <div className="container mx-auto px-4 py-16">
      <MotionSection className="text-center mb-16">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6">Event Toilet Hire</h1>
        <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
          Professional toilet hire solutions for events of all sizes. From festivals and weddings to corporate gatherings, 
          we provide clean, modern, and accessible facilities that enhance your event experience.
        </p>
      </MotionSection>

      <MotionSection className="mb-16" delay={0.2}>
        <div className="relative w-full max-w-4xl mx-auto aspect-[16/9] rounded-lg overflow-hidden">
          <Image
            src="/images/event-toilets.svg"
            alt="Professional Event Toilet Facilities"
            fill
            className="object-cover"
          />
        </div>
      </MotionSection>

      <MotionSection className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Event-Specific Solutions</h2>
        <div 
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          style={{opacity: 0.99}}
        >
          {eventTypes.map((type, index) => (
            <div 
              key={index}
              className="p-6 rounded-lg border border-primary/20 backdrop-blur-sm"
            >
              <h3 className="text-xl font-bold mb-2">{type.title}</h3>
              <p className="text-muted-foreground mb-4">{type.description}</p>
              <ul className="space-y-2">
                {type.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center">
                    <span className="mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </MotionSection>

      <MotionSection className="mb-16" delay={0.4}>
        <h2 className="text-3xl font-bold mb-8 text-center">Specialized Units</h2>
        <div 
          className="grid gap-8 md:grid-cols-2"
          style={{opacity: 0.99}}
        >
          {specializedUnits.map((unit, index) => (
            <div 
              key={index}
              className="p-6 rounded-lg border border-primary/20 backdrop-blur-sm"
            >
              <h3 className="text-xl font-bold mb-2">{unit.title}</h3>
              <p className="text-muted-foreground mb-4">{unit.description}</p>
              <ul className="space-y-2">
                {unit.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center">
                    <span className="mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
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
        <h2 className="text-3xl font-bold mb-8">Plan Your Event Facilities</h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Get expert advice and a customized quote for your event toilet requirements. Our team is ready to help ensure your event runs smoothly.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="inline-block bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 rounded-lg font-medium text-lg"
          >
            Get Quote →
          </Link>
          <Link
            href="/calculator"
            className="inline-block bg-secondary text-secondary-foreground hover:bg-secondary/90 px-8 py-3 rounded-lg font-medium text-lg"
          >
            Use Calculator
          </Link>
        </div>
      </MotionSection>
    </div>
  );
}
