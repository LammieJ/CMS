interface LocationContent {
  intro: string;
  services: string;
  features: string[];
  specialties: string;
}

export const locationContent: Record<string, LocationContent> = {
  "altrincham": {
    intro: "Altrincham, with its vibrant mix of historic market town charm and modern urban development, demands versatile toilet hire solutions. Our services cater to the diverse needs of this thriving community, from the bustling markets and food halls to contemporary business developments and residential areas.",
    services: "We've been serving Altrincham's unique requirements for years, understanding the specific needs of local events at Altrincham Market, construction projects in Broadheath's industrial area, and community gatherings in Timperley. Our toilet facilities are regularly maintained to match the high standards expected in this prestigious Greater Manchester suburb.",
    features: [
      "Specialized solutions for Altrincham Market events",
      "Rapid deployment across Broadheath industrial zone",
      "Premium facilities for Timperley community events",
      "Dedicated maintenance team based in Altrincham",
      "Custom solutions for local construction projects",
      "24/7 support for all Altrincham locations"
    ],
    specialties: "From supporting the regeneration projects transforming Altrincham's landscape to providing facilities for the town's famous food markets, we understand the unique character of each area we serve. Our local expertise ensures we can provide the perfect solution for any requirement in Altrincham."
  },
  "manchester": {
    intro: "Manchester's dynamic urban landscape, from its historic industrial heritage to modern developments, requires sophisticated toilet hire solutions. We serve the city's diverse needs, from major construction projects in Ancoats to cultural events in the Northern Quarter.",
    services: "Our experience in Manchester spans decades, providing essential facilities for everything from major sporting events at Old Trafford to construction projects in Spinningfields. We understand the city's fast-paced environment and deliver solutions that match its professional standards.",
    features: [
      "Urban event specialists for city centre locations",
      "High-capacity solutions for Manchester's major venues",
      "Quick response team for Northern Quarter events",
      "Construction-specific units for city developments",
      "Luxury facilities for corporate events",
      "Metropolitan area coverage with 24/7 support"
    ],
    specialties: "Whether it's supporting Manchester's thriving events scene or providing facilities for the city's ongoing development projects, our local knowledge ensures we deliver the right solution every time."
  },
  "liverpool": {
    intro: "Liverpool's rich cultural heritage and modern development projects require adaptable toilet hire solutions. From the historic Albert Dock to the innovative Liverpool ONE, we provide facilities that meet the city's diverse needs while respecting its unique character.",
    services: "Our Liverpool team specializes in supporting major cultural events, waterfront festivals, and construction projects across the city. We understand the importance of reliable service in this bustling metropolitan area.",
    features: [
      "Waterfront event specialists",
      "Cultural venue expertise",
      "City centre rapid response",
      "Maritime area solutions",
      "Festival and event support",
      "Heritage site compatible units"
    ],
    specialties: "Our deep understanding of Liverpool's unique requirements enables us to provide tailored solutions for any situation, from dockside developments to city centre celebrations."
  },
  "chester": {
    intro: "Chester's unique blend of historic architecture and modern amenities requires thoughtful toilet hire solutions that respect the city's character. From Roman walls to contemporary shopping districts, we provide facilities that complement Chester's distinctive environment.",
    services: "Our Chester operations cater to the city's diverse needs, from supporting tourism events around the historic walls to serving modern developments in the business quarter. We understand the importance of maintaining Chester's aesthetic standards while providing essential facilities.",
    features: [
      "Heritage-sensitive solutions for historic areas",
      "Tourist-friendly facilities for city centre events",
      "Specialized units for Chester Racecourse",
      "Quick setup for riverside locations",
      "Modern facilities for business district",
      "Historic district compliance expertise"
    ],
    specialties: "Our experience in Chester allows us to provide solutions that respect the city's historic character while meeting modern requirements, whether for tourist events, business functions, or construction projects."
  },
  "warrington": {
    intro: "Warrington's position as a key business and logistics hub demands reliable and efficient toilet hire services. We provide solutions that support the town's industrial areas, retail centers, and community spaces with equal expertise.",
    services: "From supporting major distribution centers to providing facilities for local events, our Warrington team delivers comprehensive toilet hire solutions across the borough. We understand the unique needs of both industrial and residential areas.",
    features: [
      "Industrial site specialists",
      "Retail development expertise",
      "Business park solutions",
      "Community event support",
      "Rapid response service",
      "Logistics hub experience"
    ],
    specialties: "Our knowledge of Warrington's diverse requirements ensures we can provide the right facilities for any situation, from industrial sites to community gatherings."
  },
  "macclesfield": {
    intro: "Macclesfield combines industrial heritage with modern enterprise, requiring versatile toilet hire solutions. Our services support everything from silk heritage events to contemporary business parks.",
    services: "We provide comprehensive coverage across Macclesfield, understanding the unique requirements of both its historic center and modern developments. Our local team ensures rapid response and reliable service.",
    features: [
      "Heritage event specialists",
      "Industrial site solutions",
      "Town centre expertise",
      "Business park facilities",
      "Local event support",
      "Historic area experience"
    ],
    specialties: "With deep knowledge of Macclesfield's varied needs, we deliver toilet hire solutions that support both its traditional character and modern development."
  }
}

// Function to generate unique content for locations without specific content
export function generateLocationContent(locationName: string, areas: string[]): LocationContent {
  const isCity = locationName === "Manchester" || locationName === "Liverpool" || locationName === "Chester"
  const isTown = areas.some(area => area.includes("Town Centre"))
  const isIndustrial = areas.some(area => area.includes("Industrial") || area.includes("Business Park"))
  const isHistoric = areas.some(area => area.includes("Historic") || area.includes("Heritage"))
  
  let baseContent: LocationContent = {
    intro: "",
    services: "",
    features: [],
    specialties: ""
  }

  if (isCity) {
    baseContent = {
      intro: `${locationName}'s metropolitan landscape presents unique challenges for toilet hire services. Our comprehensive solutions are designed to meet the diverse needs of this major urban center, from city-wide events to local community gatherings.`,
      services: `With years of experience serving ${locationName}, we've developed deep expertise in providing toilet facilities for various scenarios, from major cultural events to essential construction projects.`,
      features: [
        `Dedicated ${locationName} city service team`,
        "Urban event specialists",
        "High-capacity solutions",
        "Rapid city-wide deployment",
        "Metropolitan area coverage",
        "24/7 urban support services"
      ],
      specialties: `Our ${locationName}-based team understands the unique requirements of urban service delivery, ensuring reliable and efficient solutions for any situation.`
    }
  } else if (isIndustrial) {
    baseContent = {
      intro: `${locationName}'s industrial and business landscape requires professional toilet hire solutions that meet commercial standards. Our services are tailored to support both business operations and development projects.`,
      services: `We specialize in providing reliable facilities for ${locationName}'s business community, from industrial sites to corporate events.`,
      features: [
        "Industrial site specialists",
        "Business park solutions",
        "Construction project support",
        "Corporate event facilities",
        "Rapid response service",
        "24/7 maintenance support"
      ],
      specialties: `Our experience serving ${locationName}'s business sector ensures we deliver professional, efficient solutions for any commercial requirement.`
    }
  } else if (isHistoric) {
    baseContent = {
      intro: `${locationName}'s rich heritage requires thoughtful toilet hire solutions that respect its historic character. We provide facilities that complement the area's traditional atmosphere while meeting modern standards.`,
      services: `Our services in ${locationName} are designed to support both heritage events and contemporary needs, ensuring appropriate facilities for any occasion.`,
      features: [
        "Heritage site specialists",
        "Event-specific solutions",
        "Traditional area expertise",
        "Modern facility options",
        "Careful site planning",
        "Historic setting experience"
      ],
      specialties: `We understand ${locationName}'s unique character and provide solutions that enhance rather than detract from its historic charm.`
    }
  } else if (isTown) {
    baseContent = {
      intro: `${locationName} combines modern amenities with local charm, requiring toilet hire solutions that can adapt to various community needs. Our services are tailored to support both local events and development projects.`,
      services: `We've established a strong presence in ${locationName}, providing reliable toilet hire services for community events, construction projects, and private functions.`,
      features: [
        `Local ${locationName} expertise`,
        "Community event solutions",
        "Construction site facilities",
        "Quick local response times",
        "Regular maintenance service",
        "Flexible hire options"
      ],
      specialties: `Our experience in ${locationName} enables us to provide the perfect balance of professional service and local understanding.`
    }
  } else {
    baseContent = {
      intro: `${locationName} offers a unique setting that requires personalized toilet hire solutions. We provide services that maintain the area's character while meeting modern standards of comfort and convenience.`,
      services: `Our dedicated team serves ${locationName} with a focus on reliable, efficient service delivery, ensuring all local events and projects have access to quality facilities.`,
      features: [
        `${locationName} area specialists`,
        "Local event support",
        "Rural location expertise",
        "Flexible delivery options",
        "Regular servicing",
        "Emergency response available"
      ],
      specialties: `We understand ${locationName}'s specific needs and provide solutions that complement local activities while maintaining high service standards.`
    }
  }

  return baseContent
}
