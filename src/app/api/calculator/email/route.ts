import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { email, calculationResults } = await request.json();

    // Validate email
    if (!email || !email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Log the calculation results
    console.log('Calculation request:', {
      timestamp: new Date().toISOString(),
      email,
      ...calculationResults
    });

    // TODO: Add actual email sending logic here
    // For now, we'll just simulate email sending
    console.log('Email would be sent to:', email);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error handling calculator email:', error);
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 }
    );
  }
}
