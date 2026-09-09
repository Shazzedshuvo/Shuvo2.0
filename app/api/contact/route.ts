import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/db/mongodb';
import Contact from '@/lib/db/models/Contact';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, subject, message, serviceInterest } = body;

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { success: false, error: 'All required fields (name, email, subject, message) must be provided.' },
        { status: 400 }
      );
    }

    // Attempt MongoDB save if configured
    let savedToDb = false;
    let contactId = 'offline-' + Date.now();

    try {
      const conn = await connectToDatabase();
      if (conn) {
        const newContact = await Contact.create({
          name,
          email,
          subject,
          message,
          serviceInterest: serviceInterest || 'General Inquiry'
        });
        savedToDb = true;
        contactId = newContact._id.toString();
      }
    } catch (dbErr) {
      console.warn('Database write failed or MongoDB not configured. Proceeding with fallback response:', dbErr);
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Thank you! Your message has been received. Shazzed Shuvo will get back to you shortly.',
        data: {
          id: contactId,
          savedToDatabase: savedToDb,
          timestamp: new Date().toISOString()
        }
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('API Error in /api/contact:', error);
    return NextResponse.json(
      { success: false, error: 'An unexpected error occurred while processing your request.' },
      { status: 500 }
    );
  }
}
