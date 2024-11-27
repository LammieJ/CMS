import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const forwarded = request.headers.get('x-forwarded-for');
  const ip = forwarded ? forwarded.split(',')[0] : request.headers.get('x-real-ip');
  
  try {
    const response = await fetch(`https://ip-api.com/json/${ip}`);
    const data = await response.json();
    
    return NextResponse.json({
      ip: ip,
      location: data.city ? `${data.city}, ${data.country}` : 'Unknown Location'
    });
  } catch (error) {
    return NextResponse.json({
      ip: ip,
      location: 'Unknown Location'
    });
  }
}
