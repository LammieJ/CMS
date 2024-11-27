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
    };
    services: string[];
  };
}
