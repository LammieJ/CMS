const sharp = require('sharp');
const { mkdir, symlink } = require('fs/promises');
const path = require('path');

const sizes = [72, 96, 128, 144, 152, 192, 384, 512];
const appleIconSize = 180;

async function generateIcons() {
  try {
    // Create icons directory if it doesn't exist
    await mkdir(path.join(process.cwd(), 'public', 'icons'), { recursive: true });

    // Load the source image
    const sourceImage = sharp(path.join(process.cwd(), 'public', 'images', 'logo1.png'));

    // Generate standard icons
    await Promise.all(sizes.map(async (size) => {
      await sourceImage
        .clone()
        .resize(size, size, {
          fit: 'contain',
          background: { r: 255, g: 255, b: 255, alpha: 0 }
        })
        .toFile(path.join(process.cwd(), 'public', 'icons', `icon-${size}x${size}.png`));
      console.log(`Generated ${size}x${size} icon`);
    }));

    // Generate Apple Touch Icon
    await sourceImage
      .clone()
      .resize(appleIconSize, appleIconSize, {
        fit: 'contain',
        background: { r: 255, g: 255, b: 255, alpha: 0 }
      })
      .toFile(path.join(process.cwd(), 'public', 'icons', 'apple-touch-icon.png'));
    console.log('Generated Apple Touch Icon');

    // Copy apple-touch-icon.png to public root
    await sourceImage
      .clone()
      .resize(appleIconSize, appleIconSize, {
        fit: 'contain',
        background: { r: 255, g: 255, b: 255, alpha: 0 }
      })
      .toFile(path.join(process.cwd(), 'public', 'apple-touch-icon.png'));

    console.log('All icons generated successfully');
  } catch (error) {
    console.error('Error generating icons:', error);
    process.exit(1);
  }
}

generateIcons();
