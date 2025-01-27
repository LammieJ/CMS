export interface LocationSEOContent {
  title: string;
  metaDescription: string;
  keywords: string[];
  h1: string;
  h2s: string[];
  content: string;
  schema: {
    name: string;
    description: string;
    areaServed: {
      name: string;
      containsPlace: string[];
      geoCoordinates?: {
        latitude: string;
        longitude: string;
      };
    };
    services: string[];
    events?: string[];
    facilities?: string[];
    specialFeatures?: string[];
    localBusinessHours?: string;
    priceRange?: string;
    paymentAccepted?: string[];
    areaSpecialties?: string[];
  };
  faqSchema?: {
    questions: Array<{
      question: string;
      answer: string;
    }>;
  };
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface GeoCoordinates {
  latitude: string;
  longitude: string;
}

export interface AreaServed {
  name: string;
  containsPlace: string[];
  geoCoordinates?: GeoCoordinates;
}

export interface LocationSchema {
  name: string;
  description: string;
  areaServed: AreaServed;
  services: string[];
  events?: string[];
  facilities?: string[];
  specialFeatures?: string[];
  localBusinessHours?: string;
  priceRange?: string;
  paymentAccepted?: string[];
  areaSpecialties?: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  content: string;
  image?: string;
  tags?: string[];
  previousPost?: {
    slug: string;
    title: string;
  };
  nextPost?: {
    slug: string;
    title: string;
  };
}
