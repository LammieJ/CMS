import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const {
      attendees,
      femalePercent,
      malePercent,
      disabledPercent,
      duration,
      alcohol,
      food,
      servicingInterval,
      buffer,
    } = await request.json();

    console.log('Received calculation request:', {
      attendees,
      femalePercent,
      malePercent,
      disabledPercent,
      duration,
      alcohol,
      food,
      servicingInterval,
      buffer,
    });

    const femaleAttendees = (attendees * femalePercent) / 100;
    const maleAttendees = (attendees * malePercent) / 100;
    const disabledAttendees = (attendees * disabledPercent) / 100;

    // Toilet ratios
    const femaleRatio = duration < 6 ? 100 : alcohol || food ? 75 : 85;
    const maleRatio = duration < 6 ? 500 : alcohol || food ? 400 : 425;
    const maleUrinalRatio = duration < 6 ? 150 : alcohol || food ? 100 : 125;

    const totalFemaleToilets = Math.ceil(femaleAttendees / femaleRatio);
    const totalMaleToilets = Math.ceil(maleAttendees / maleRatio);
    const totalMaleUrinals = Math.ceil(maleAttendees / maleUrinalRatio);
    const totalAccessibleToilets = Math.max(1, Math.ceil(disabledAttendees / 10));

    let totalToilets = totalFemaleToilets + totalMaleToilets + totalAccessibleToilets;

    // Adjust for servicing
    const servicingFactor = Math.ceil(duration / servicingInterval);
    totalToilets += servicingFactor;

    // Add buffer
    totalToilets = Math.ceil(totalToilets * (1 + buffer / 100));

    // Calculate handwashing facilities (1 per 10 toilets)
    const handwashingFacilities = Math.ceil(totalToilets / 10);

    const result = {
      femaleToilets: totalFemaleToilets,
      maleToilets: totalMaleToilets,
      maleUrinals: totalMaleUrinals,
      accessibleToilets: totalAccessibleToilets,
      handwashingFacilities,
      totalToilets
    };

    console.log('Calculation result:', result);

    return NextResponse.json(result);
  } catch (error) {
    console.error('Calculation error:', error);
    return NextResponse.json(
      { error: 'Failed to calculate toilet requirements' },
      { status: 500 }
    );
  }
}
