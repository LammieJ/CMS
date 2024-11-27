"use client"

import Link from 'next/link'
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'
import { Logo } from '../ui/logo'

export function Footer() {
  const services = [
    {
      label: 'Standard Portable Toilets',
      href: '/services/portable-toilet-hire',
      description: 'Ideal for construction sites and outdoor events'
    },
    {
      label: 'Luxury Toilet Trailers',
      href: '/services/luxury-toilet-hire',
      description: 'Perfect for weddings and corporate events'
    },
    {
      label: 'Event Solutions',
      href: '/services/event-solutions',
      description: 'Comprehensive solutions for festivals and large gatherings'
    }
  ]

  const quickLinks = [
    { label: 'About Us', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' }
  ]

  const socialLinks = [
    { icon: Facebook, href: 'https://www.facebook.com/share/1GmYNks5kA/', label: 'Facebook' },
    { icon: Twitter, href: 'https://twitter.com/chelfordmobile', label: 'Twitter' },
    { icon: Instagram, href: 'https://instagram.com/chelfordmobileservices', label: 'Instagram' },
    { icon: Linkedin, href: 'https://linkedin.com/company/chelford-mobile-services', label: 'LinkedIn' }
  ]

  return (
    <footer className="bg-secondary text-secondary-foreground pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <Logo />
            <p className="text-muted-foreground dark:text-primary/80 mt-4">
              Professional toilet hire services providing high-quality portable and luxury facilities across Chester and surrounding areas.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors dark:text-primary dark:hover:text-primary-foreground"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors dark:text-primary/80 dark:hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Our Services</h3>
            <ul className="space-y-4">
              {services.map((service, index) => (
                <li key={index}>
                  <Link
                    href={service.href}
                    className="text-muted-foreground hover:text-primary transition-colors dark:text-primary/80 dark:hover:text-primary"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="tel:07534362251"
                  className="flex items-center text-muted-foreground hover:text-primary transition-colors dark:text-primary/80 dark:hover:text-primary"
                >
                  <Phone className="w-5 h-5 mr-3" />
                  <span>07534 362251</span>
                </Link>
              </li>
              <li>
                <Link
                  href="mailto:info@chelfordmobileservices.co.uk"
                  className="flex items-center text-muted-foreground hover:text-primary transition-colors dark:text-primary/80 dark:hover:text-primary"
                >
                  <Mail className="w-5 h-5 mr-3" />
                  <span>info@chelfordmobileservices.co.uk</span>
                </Link>
              </li>
              <li className="flex items-center text-muted-foreground dark:text-primary/80">
                <MapPin className="w-5 h-5 mr-3" />
                <span>Chester, United Kingdom</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-muted mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-muted-foreground text-sm dark:text-primary/80">
              © {new Date().getFullYear()} Chelford Mobile Services. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
