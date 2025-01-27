import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | CMS Toilet Hire",
  description: "Find answers to common questions about portable toilet hire, servicing, pricing, and more. Get expert information about our toilet hire services.",
  keywords: [
    "toilet hire FAQ",
    "portable toilet questions",
    "toilet hire services",
    "CMS Toilet Hire FAQ",
    "sanitation services questions"
  ],
};

const faqItems = [
  {
    question: "How often are portable toilets serviced?",
    answer: "Our standard service schedule is weekly, but we can adjust the frequency based on usage and your specific requirements. For high-traffic events, we recommend daily or twice-daily servicing to maintain optimal hygiene standards.",
  },
  {
    question: "What's included in the hire price?",
    answer: "Our hire prices typically include delivery, collection, regular servicing, toilet paper supplies, and hand sanitizer. For luxury units, we also include premium amenities such as hand towels, soap dispensers, and mirrors.",
  },
  {
    question: "How many toilets do I need for my event?",
    answer: "The number of toilets needed depends on several factors including event duration, number of attendees, and whether alcohol is being served. As a general guide, we recommend 1 toilet per 75-100 people for events up to 6 hours. Use our online calculator for a more accurate estimate.",
  },
  {
    question: "Do you provide accessible toilets?",
    answer: "Yes, we offer fully compliant accessible toilets suitable for users with disabilities. These units feature extra space, support rails, and lower fixtures for easy access. We recommend at least one accessible unit for every standard 10 toilets.",
  },
  {
    question: "What power supply is needed for luxury toilet trailers?",
    answer: "Luxury toilet trailers typically require a 16amp or 32amp power supply, depending on the unit size. We can provide generators if no mains power is available, and some units can operate on battery power for shorter events.",
  },
  {
    question: "Can portable toilets be used in winter?",
    answer: "Yes, our toilets are designed for year-round use. Luxury units feature heating systems, and we use special winter-grade chemicals in standard units to prevent freezing. We also provide additional maintenance during cold weather.",
  },
  {
    question: "What happens in case of emergency?",
    answer: "We provide 24/7 emergency support for all our clients. Our response team can handle urgent servicing, repairs, or replacements, typically responding within 2-4 hours of notification.",
  },
  {
    question: "Do you offer long-term hire for construction sites?",
    answer: "Yes, we specialize in long-term hire for construction sites with flexible contract terms. We offer both standard portable toilets and welfare units with additional facilities like hot water and rest areas.",
  },
  {
    question: "What are your environmental policies?",
    answer: "We use environmentally friendly cleaning products and dispose of waste at licensed treatment facilities. Our luxury units feature water-saving devices, and we're constantly updating our fleet to include more eco-friendly options.",
  },
  {
    question: "How far in advance should I book?",
    answer: "We recommend booking at least 2-3 weeks in advance for standard hires, and 1-2 months for large events or luxury units. However, we can often accommodate last-minute requests from our extensive fleet.",
  },
  {
    question: "What payment terms do you offer?",
    answer: "We offer flexible payment terms including weekly, monthly, or per-event billing. For long-term construction hire, we can set up account facilities. We accept all major credit cards and bank transfers.",
  },
  {
    question: "What area do you cover?",
    answer: "We primarily service Cheshire and surrounding areas, but can accommodate requests throughout the Northwest. Contact us with your location for specific coverage details.",
  }
];

export default function FAQPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4 text-foreground">Frequently Asked Questions</h1>
          <p className="text-lg text-muted-foreground">
            Find answers to common questions about our toilet hire services. Can't find what you're looking for? Contact our team for personalized assistance.
          </p>
        </div>

        <div className="space-y-6">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-lg shadow-sm border border-border transition-colors duration-200"
            >
              <h2 className="text-xl font-semibold mb-3 text-foreground">{item.question}</h2>
              <p className="text-muted-foreground">{item.answer}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          <div className="bg-card p-6 rounded-lg border border-border transition-colors duration-200">
            <h2 className="text-2xl font-bold mb-4 text-foreground">Still Have Questions?</h2>
            <p className="text-muted-foreground mb-6">
              Our team is here to help you with any questions about our toilet hire services.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Contact Us
            </Link>
          </div>
          <div className="bg-card p-6 rounded-lg border border-border transition-colors duration-200">
            <h2 className="text-2xl font-bold mb-4 text-foreground">Ready to Book?</h2>
            <p className="text-muted-foreground mb-6">
              Get an instant quote for your toilet hire needs using our online calculator.
            </p>
            <Link
              href="/calculator"
              className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Get Quote
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
