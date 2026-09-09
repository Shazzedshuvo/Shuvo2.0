import { NextResponse } from 'next/server';
import { testimonialsData } from '@/lib/data/testimonialsData';

export async function GET() {
  try {
    return NextResponse.json({
      success: true,
      count: testimonialsData.length,
      data: testimonialsData
    });
  } catch (error) {
    console.error('Error fetching testimonials:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to retrieve testimonials' },
      { status: 500 }
    );
  }
}
