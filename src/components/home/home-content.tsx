"use client"

import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { useRef, useState, useEffect } from "react"

export function HomeContent() {
  const [location, setLocation] = useState<string | null>(null)
  const imageRef = useRef(null)
  
  useEffect(() => {
    fetch('/api/ip')
      .then(res => res.json())
      .then(data => {
        if (data.location && data.location !== 'Unknown Location') {
          setLocation(data.location.split(',')[0]) // Just get the city name
        }
      })
      .catch(() => console.error('Error fetching location'))
  }, [])

  const servicesRef = useRef(null)
  const featuresRef = useRef(null)
  const ctaRef = useRef(null)

  const imageInView = useInView(imageRef, { once: true, margin: "-20%" })
  const servicesInView = useInView(servicesRef, { once: true, margin: "-20%" })
  const featuresInView = useInView(featuresRef, { once: true, margin: "-20%" })
  const ctaInView = useInView(ctaRef, { once: true, margin: "-20%" })

  const bounceVariants = {
    hidden: { opacity: 0, y: 150 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.6,
        duration: 1.2,
        stiffness: 150,
        damping: 8
      }
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  }

  return (
    <div className="container mx-auto px-4">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center py-16 sm:py-24"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            bounce: 0.6,
            duration: 1.2,
            stiffness: 150,
            damping: 8
          }}
        >
          <h1 className="text-5xl sm:text-7xl font-bold mb-6">
            PORTABLE TOILET
            <br />
            HIRE
          </h1>
          {location && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-xl sm:text-2xl text-primary mb-4"
            >
              Serving {location} and surrounding areas
            </motion.p>
          )}
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-8">
            CLEAN, RELIABLE, AFFORDABLE
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
            Professional toilet hire solutions for events, construction sites, and special
            occasions across Cheshire, Merseyside and Greater Manchester.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            bounce: 0.6,
            duration: 1.2,
            stiffness: 150,
            damping: 8,
            delay: 0.2
          }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/contact"
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 rounded-lg font-medium text-lg flex items-center gap-2"
          >
            Get Quote →
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="tel:+441234567890"
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 rounded-lg font-medium text-lg flex items-center gap-2"
          >
            Call Us <span>📞</span>
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/services"
            className="border border-primary text-primary hover:bg-primary/10 px-8 py-3 rounded-lg font-medium text-lg flex items-center gap-2"
          >
            Learn More →
          </motion.a>
        </motion.div>
        <motion.div
          ref={imageRef}
          initial={{ opacity: 0, y: 150 }}
          animate={imageInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 150 }}
          transition={{
            type: "spring",
            bounce: 0.6,
            duration: 1.2,
            stiffness: 150,
            damping: 8
          }}
          className="relative w-full max-w-4xl mx-auto aspect-[16/9] rounded-lg overflow-hidden"
        >
          <Image
            src="/images/cmstoilethire.jpg"
            alt="CMS Toilet Hire Services"
            fill
            className="object-cover"
            priority
          />
        </motion.div>
      </motion.div>

      {/* Services Section */}
      <motion.div
        ref={servicesRef}
        initial="hidden"
        animate={servicesInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-16"
      >
        {[
          {
            icon: "/images/portable-toilet.svg",
            title: "Portable Toilets",
            description: "Standard portable toilets suitable for construction sites and outdoor events."
          },
          {
            icon: "/images/luxury-toilet.svg",
            title: "Luxury Toilets",
            description: "Premium toilet trailers perfect for weddings and corporate events."
          },
          {
            icon: "/images/event-toilets.svg",
            title: "Event Solutions",
            description: "Complete sanitation solutions for festivals and large-scale events."
          }
        ].map((service, i) => (
          <motion.div
            key={i}
            variants={bounceVariants}
            className="p-6 rounded-lg border border-primary/20 backdrop-blur-sm"
          >
            <Image
              src={service.icon}
              alt={service.title}
              width={64}
              height={64}
              className="mb-4"
            />
            <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
            <p className="text-muted-foreground">{service.description}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Features Section */}
      <motion.div
        ref={featuresRef}
        initial="hidden"
        animate={featuresInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="py-16"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              title: "24/7 Service",
              description: "Round-the-clock support and emergency response"
            },
            {
              title: "Regular Cleaning",
              description: "Thorough cleaning and maintenance services"
            },
            {
              title: "Quick Delivery",
              description: "Fast and efficient delivery to your location"
            },
            {
              title: "Competitive Rates",
              description: "Affordable pricing with no hidden charges"
            }
          ].map((feature, i) => (
            <motion.div
              key={i}
              variants={bounceVariants}
              className="text-center p-6"
            >
              <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* CTA Section */}
      <motion.div
        ref={ctaRef}
        initial={{ opacity: 0, y: 150 }}
        animate={ctaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 150 }}
        transition={{
          type: "spring",
          bounce: 0.6,
          duration: 1.2,
          stiffness: 150,
          damping: 8
        }}
        className="text-center py-16"
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-8">Ready to Get Started?</h2>
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="/contact"
          className="inline-block bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 rounded-lg font-medium text-lg"
        >
          Request a Quote Today →
        </motion.a>
      </motion.div>
    </div>
  )
}
