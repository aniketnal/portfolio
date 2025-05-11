import { Resend } from 'resend';
import ContactEmail from '../../../emails/email';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { message: 'Missing required fields' },
        { status: 400 }
      );
    }

    const data = await resend.emails.send({
      from: `${email}`,
      to: 'aniketnalegonkar44@@gmail.com',
      subject: 'New Contact Form Submission',
      react: ContactEmail({
        name,
        email,
        message,
      })
    });

    return NextResponse.json(
      { message: 'Email sent successfully', data },
      { status: 200 }
    );
  } catch (error) {
    console.error('Email send error:', error);
    return NextResponse.json(
      { message: 'Email failed to send', error },
      { status: 500 }
    );
  }
}
