const fs = require('fs');
const path = require('path');

// Read the CSV file
const csvPath = path.join(process.cwd(), 'town.csv');
const towns = fs.readFileSync(csvPath, 'utf-8')
  .split('\n')
  .map((town: string) => town.trim())
  .filter(Boolean) // Remove empty lines
  .filter((town: string, index: number, self: string[]) => self.indexOf(town) === index); // Remove duplicates

// Generate slug from town name
function generateSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '') // Remove special characters
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single hyphen
    .trim();
}

// Generate location data
const locationData = towns.reduce((acc: Record<string, { name: string; slug: string; areas: string[] }>, town: string) => {
  const slug = generateSlug(town);
  acc[slug] = {
    name: town,
    slug,
    areas: ["Town Centre", "Surrounding Areas"]
  };
  return acc;
}, {});

// Generate the TypeScript file content
const fileContent = `export interface LocationData {
  name: string;
  slug: string;
  areas: string[];
}

// Generated from town.csv
export const locationData: Record<string, LocationData> = ${JSON.stringify(locationData, null, 2)};

export const locations = Object.values(locationData);
`;

// Write to location-data.ts
const outputPath = path.join(process.cwd(), 'src', 'app', '(pages)', 'locations', 'location-data.ts');
fs.writeFileSync(outputPath, fileContent);

console.log('Location data generated successfully!');
