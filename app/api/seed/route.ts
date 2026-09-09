import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/db/mongodb';
import Contact from '@/lib/db/models/Contact';

export async function POST() {
  try {
    const conn = await connectToDatabase();
    if (!conn) {
      return NextResponse.json({
        success: false,
        message: 'MongoDB is not configured in MONGODB_URI. Static fallback dataset is active.'
      });
    }

    const sampleCount = await Contact.countDocuments();

    return NextResponse.json({
      success: true,
      message: 'Database connection verified successfully.',
      totalContactsRecorded: sampleCount
    });
  } catch (error) {
    console.error('Seed / Healthcheck error:', error);
    return NextResponse.json({ success: false, error: 'Database verification failed' }, { status: 500 });
  }
}

export async function GET() {
  return POST();
}
