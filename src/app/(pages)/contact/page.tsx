'use client';

import { useState, useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'

interface FormData {
  name: string
  email: string
  phone: string
  service: string
  eventDate: string
  duration: string
  location: string
  message: string
}

interface FormState {
  isSubmitting: boolean
  isSuccess: boolean
  error: string | null
}

function ContactForm() {
  const searchParams = useSearchParams();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    service: '',
    eventDate: '',
    duration: '',
    location: '',
    message: ''
  })

  const [formState, setFormState] = useState<FormState>({
    isSubmitting: false,
    isSuccess: false,
    error: null
  })

  useEffect(() => {
    // Get location and message parameters from URL
    const location = searchParams.get('location');
    const message = searchParams.get('message');

    if (location || message) {
      setFormData(prev => ({
        ...prev,
        location: location ? decodeURIComponent(location) : prev.location,
        message: message ? decodeURIComponent(message) : prev.message
      }));
    }
  }, [searchParams]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormState({ isSubmitting: true, isSuccess: false, error: null })

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error('Failed to submit form')
      }

      setFormState({
        isSubmitting: false,
        isSuccess: true,
        error: null
      })
      
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        eventDate: '',
        duration: '',
        location: '',
        message: ''
      })
    } catch (error) {
      setFormState({
        isSubmitting: false,
        isSuccess: false,
        error: 'Failed to submit form. Please try again.'
      })
    }
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-6">Quick Quote Request</h2>
      
      {formState.isSuccess && (
        <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-md">
          Thank you for your enquiry. We'll be in touch shortly!
        </div>
      )}

      {formState.error && (
        <div className="mb-6 p-4 bg-red-100 text-red-700 rounded-md">
          {formState.error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0891b2]"
            required
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0891b2]"
            required
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0891b2]"
          />
        </div>

        <div>
          <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
            Service Required *
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={(e) => setFormData({ ...formData, service: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0891b2]"
            required
          >
            <option value="">Select a service</option>
            <option value="standard">Standard Portable Toilet</option>
            <option value="luxury">Luxury Toilet Units</option>
            <option value="event">Event Package</option>
            <option value="construction">Construction Site Facilities</option>
            <option value="waste">Waste Services</option>
          </select>
        </div>

        <div>
          <label htmlFor="eventDate" className="block text-sm font-medium text-gray-700 mb-1">
            Event/Start Date
          </label>
          <input
            type="date"
            id="eventDate"
            name="eventDate"
            value={formData.eventDate}
            onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0891b2]"
          />
        </div>

        <div>
          <label htmlFor="duration" className="block text-sm font-medium text-gray-700 mb-1">
            Hire Duration
          </label>
          <select
            id="duration"
            name="duration"
            value={formData.duration}
            onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0891b2]"
          >
            <option value="">Select duration</option>
            <option value="1-day">1 Day</option>
            <option value="weekend">Weekend</option>
            <option value="1-week">1 Week</option>
            <option value="2-weeks">2 Weeks</option>
            <option value="1-month">1 Month</option>
            <option value="long-term">Long Term (3+ months)</option>
          </select>
        </div>

        <div>
          <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
            Delivery Location
          </label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={(e) => setFormData({ ...formData, location: e.target.value })}
            placeholder="Full address or postcode"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0891b2]"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
            Additional Requirements *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            rows={4}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0891b2]"
            required
            placeholder="Please provide any specific requirements or questions you have"
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={formState.isSubmitting}
          className={`w-full bg-[#0891b2] text-white py-2 px-4 rounded-md hover:bg-[#0891b2]/90 transition-colors ${
            formState.isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          {formState.isSubmitting ? 'Submitting...' : 'Submit Request'}
        </button>
      </form>
    </div>
  )
}

export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Contact Us</h1>

      <div className="grid md:grid-cols-2 gap-12 mb-12">
        <div>
          <h2 className="text-2xl font-semibold mb-6">Get In Touch</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">Phone</h3>
              <p className="text-gray-700">
                <a href="tel:07534362251" className="hover:text-[#0891b2]">07534 362251</a>
              </p>
              <p className="text-sm text-gray-600">Available 24/7 for emergencies</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Email</h3>
              <p className="text-gray-700">
                <a href="mailto:info@chelfordmobileservices.co.uk" className="hover:text-[#0891b2]">
                  info@chelfordmobileservices.co.uk
                </a>
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Office Hours</h3>
              <p className="text-gray-700">Monday - Friday: 8am - 6pm</p>
              <p className="text-gray-700">Saturday: 9am - 4pm</p>
              <p className="text-gray-700">Sunday: Closed (Emergency service available)</p>
            </div>
          </div>
        </div>

        <Suspense fallback={<div>Loading form...</div>}>
          <ContactForm />
        </Suspense>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-3">Emergency Service</h3>
          <p className="text-gray-700 mb-4">
            24/7 emergency support available for existing customers.
          </p>
          <p className="font-semibold">Emergency: 07534 362251</p>
        </div>
        
        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-3">Service Area</h3>
          <p className="text-gray-700 mb-4">
            Serving Chester and surrounding areas within a 40-mile radius.
          </p>
          <ul className="text-gray-700 list-disc list-inside">
            <li>Chester</li>
            <li>Ellesmere Port</li>
            <li>Wrexham</li>
            <li>Warrington</li>
          </ul>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-3">Response Time</h3>
          <p className="text-gray-700 mb-4">
            We aim to respond to all enquiries within:
          </p>
          <ul className="text-gray-700 list-disc list-inside">
            <li>Phone: Immediate</li>
            <li>Email: Within 2 hours</li>
            <li>Quote requests: Same business day</li>
          </ul>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">How far in advance should I book?</h3>
            <p className="text-gray-700">
              We recommend booking at least 2 weeks in advance for events, though we can often accommodate last-minute requests.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">What information do you need for a quote?</h3>
            <p className="text-gray-700">
              Event date, location, duration, expected attendance, and type of facility needed will help us provide an accurate quote.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Do you offer site visits?</h3>
            <p className="text-gray-700">
              Yes, we can arrange site visits for large events or complex installations to ensure the best solution for your needs.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
