import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const forwarded = request.headers.get('x-forwarded-for');
  const ip = forwarded ? forwarded.split(',')[0] : request.headers.get('x-real-ip');
  
  // For local development or when IP is not available
  if (ip === '1' || ip === '::1' || !ip) {
    return NextResponse.json({
      ip: ip,
      location: 'Manchester, United Kingdom'
    });
  }
  
  try {
    const response = await fetch(`https://ip-api.com/json/${ip}`);
    const data = await response.json();
    
    return NextResponse.json({
      ip: ip,
      location: data.city ? `${data.city}, ${data.country}` : 'Manchester, United Kingdom'
    });
  } catch (error) {
    return NextResponse.json({
      ip: ip,
      location: 'Manchester, United Kingdom'
    });
  }
}
