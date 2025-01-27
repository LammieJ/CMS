import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Toilet Hire Glossary | CMS Toilet Hire",
  description: "A comprehensive glossary of toilet hire terms and definitions. Learn about different types of portable toilets, servicing terminology, and industry-specific vocabulary.",
  keywords: [
    "toilet hire glossary",
    "portable toilet terms",
    "sanitation terminology",
    "toilet hire definitions",
    "CMS Toilet Hire glossary"
  ],
};

const glossaryTerms = [
  {
    term: "Chemical Toilet",
    definition: "A portable toilet that uses chemicals to break down waste and control odors. These are commonly used at construction sites and outdoor events.",
  },
  {
    term: "Luxury Toilet Trailer",
    definition: "A high-end portable toilet facility housed in a trailer, featuring amenities similar to permanent bathrooms including running water, flushing toilets, and climate control.",
  },
  {
    term: "Recirculating Toilet",
    definition: "A type of portable toilet that uses a closed system to recirculate blue water for flushing, helping to conserve water while maintaining hygiene.",
  },
  {
    term: "Welfare Unit",
    definition: "A mobile facility that combines toilet facilities with other amenities such as a kitchen area, rest space, and washing facilities, commonly used on construction sites.",
  },
  {
    term: "Servicing",
    definition: "The process of cleaning, emptying, and restocking portable toilets, including waste removal and sanitization.",
  },
  {
    term: "Holding Tank",
    definition: "The sealed container in a portable toilet that stores waste until it can be properly disposed of during servicing.",
  },
  {
    term: "Fresh Water Flush",
    definition: "A system that uses clean water for flushing rather than recirculated water, typically found in luxury toilet units.",
  },
  {
    term: "Hot Wash Facilities",
    definition: "Sinks with hot running water for hand washing, usually found in luxury units or welfare facilities.",
  },
  {
    term: "Wet Waste",
    definition: "Liquid waste from portable toilets that requires specialized disposal methods in accordance with environmental regulations.",
  },
  {
    term: "Event Series",
    definition: "A collection of portable toilets configured specifically for large events, including a mix of standard and accessible units.",
  },
  {
    term: "Accessible Unit",
    definition: "A larger portable toilet designed to accommodate users with disabilities, featuring extra space and support rails.",
  },
  {
    term: "Baby Changing Station",
    definition: "A fold-down platform in luxury units designed for safely changing infants' diapers.",
  },
  {
    term: "Mains Connected",
    definition: "Toilet units that can be connected to existing water and sewage systems for enhanced functionality.",
  },
  {
    term: "Off-Grid Operation",
    definition: "The ability of portable toilets to function without connection to water or electricity supplies.",
  },
  {
    term: "Waste Carrier License",
    definition: "A legal requirement for companies that transport and dispose of toilet waste, ensuring environmental compliance.",
  }
];

export default function GlossaryPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4 text-foreground">Toilet Hire Glossary</h1>
          <p className="text-lg text-muted-foreground">
            Understanding toilet hire terminology is essential for making informed decisions about your sanitation needs. Browse our comprehensive glossary of industry terms and definitions.
          </p>
        </div>

        <div className="space-y-8">
          {glossaryTerms.map((item, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-lg shadow-sm border border-border transition-colors duration-200"
            >
              <h2 className="text-xl font-semibold mb-2 text-foreground">{item.term}</h2>
              <p className="text-muted-foreground">{item.definition}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-card p-6 rounded-lg border border-border transition-colors duration-200">
          <h2 className="text-2xl font-bold mb-4 text-foreground">Need More Information?</h2>
          <p className="text-muted-foreground mb-6">
            If you have questions about any toilet hire terms or need expert advice, our team is here to help.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            Contact Our Experts
          </Link>
        </div>
      </div>
    </div>
  );
}
