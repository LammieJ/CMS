import fetch from 'node-fetch';

// Test locations with different characteristics
const testLocations = [
  {
    name: 'Chester',
    areas: ['City Centre', 'Hoole', 'Upton', 'Handbridge', 'Saltney', 'Blacon'],
    type: 'historic city',
    features: ['Roman walls', 'Chester Racecourse', 'Chester Zoo', 'River Dee']
  },
  {
    name: 'Alderley Edge',
    areas: ['Village Centre', 'Surrounding Areas'],
    type: 'affluent village',
    features: ['The Edge escarpment', 'Luxury residential areas', 'Wizard legends']
  },
  {
    name: 'Manchester',
    areas: ['City Centre', 'Deansgate', 'Northern Quarter', 'Ancoats', 'Salford', 'Didsbury'],
    type: 'major city',
    features: ['Business district', 'Universities', 'Media City', 'Sports venues']
  },
  {
    name: 'Knutsford',
    areas: ['Town Centre', 'Surrounding Areas'],
    type: 'market town',
    features: ['Tatton Park', 'Heritage buildings', 'Food festivals']
  },
  {
    name: 'Crewe',
    areas: ['Town Centre', 'Wistaston', 'Sydney', 'Haslington', 'Nantwich Road', 'Leighton'],
    type: 'industrial town',
    features: ['Railway heritage', 'Manufacturing', 'Bentley factory']
  }
];

async function testContentGeneration() {
  console.log('Testing location content generation...\n');

  for (const location of testLocations) {
    console.log(`Generating content for ${location.name} (${location.type})...`);
    try {
      const response = await fetch('http://localhost:3000/api/locations/generate-content', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: location.name,
          areas: location.areas,
          type: location.type,
          features: location.features
        })
      });

      const content = await response.json();
      
      if (content && !('error' in content)) {
        console.log('\nTitle:', content.title);
        console.log('Meta Description:', content.metaDescription);
        console.log('\nH1:', content.h1);
        console.log('\nH2s:');
        content.h2s.forEach(h2 => console.log('- ' + h2));
        console.log('\nFirst 200 chars of content:', content.content.substring(0, 200) + '...');
        console.log('\nKeywords:', content.keywords.join(', '));
        
        // Check for location-specific content
        const locationMentions = (content.content.match(new RegExp(location.name, 'g')) || []).length;
        const featureMentions = location.features.filter(feature => 
          content.content.toLowerCase().includes(feature.toLowerCase())
        ).length;
        
        console.log('\nContent Analysis:');
        console.log(`- Location name mentions: ${locationMentions}`);
        console.log(`- Local features mentioned: ${featureMentions}/${location.features.length}`);
        console.log(`- Content length: ${content.content.length} characters`);
        
        console.log('\n' + '='.repeat(80) + '\n');
      } else {
        console.log(`Failed to generate content for ${location.name}:`, 'error' in content ? content.error : 'Unknown error');
      }
    } catch (error) {
      console.error(`Error generating content for ${location.name}:`, error);
    }
    
    // Add a delay between requests to avoid rate limiting
    await new Promise(resolve => setTimeout(resolve, 2000));
  }
}

// First start the Next.js development server
console.log('Please ensure the Next.js development server is running (npm run dev)');
console.log('Testing will begin in 5 seconds...\n');

setTimeout(() => {
  testContentGeneration().catch(console.error);
}, 5000);
