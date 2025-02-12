import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'edge'

interface CalculatorInput {
  guests: number;
  duration: number;
  type: string;
}

export async function POST(request: NextRequest) {
  try {
    const { guests, duration, type } = await request.json() as CalculatorInput;

    if (!guests || !duration || !type) {
      return NextResponse.json(
        { error: 'Missing required parameters' },
        { status: 400 }
      );
    }

    // Base calculations
    let toilets = Math.ceil(guests / 100); // 1 toilet per 100 guests base ratio
    
    // Adjust for duration
    if (duration > 4) {
      toilets = Math.ceil(toilets * 1.25); // 25% more for events over 4 hours
    }
    if (duration > 8) {
      toilets = Math.ceil(toilets * 1.5); // 50% more for events over 8 hours
    }

    // Adjust for type
    let price = 0;
    switch (type.toLowerCase()) {
      case 'standard':
        price = toilets * 75; // £75 per standard unit
        break;
      case 'luxury':
        toilets = Math.ceil(toilets * 0.75); // Luxury units have higher capacity
        price = toilets * 250; // £250 per luxury unit
        break;
      case 'disabled':
        toilets = Math.max(1, Math.ceil(guests / 500)); // 1 disabled toilet per 500 guests
        price = toilets * 100; // £100 per disabled unit
        break;
      default:
        return NextResponse.json(
          { error: 'Invalid toilet type' },
          { status: 400 }
        );
    }

    // Add service charge
    price += toilets * 25; // £25 service charge per unit

    return NextResponse.json({
      toilets,
      price,
      duration,
      guests,
      type
    });
  } catch (error) {
    console.error('Calculator error:', error);
    return NextResponse.json(
      { error: 'Failed to calculate requirements' },
      { status: 500 }
    );
  }
}
