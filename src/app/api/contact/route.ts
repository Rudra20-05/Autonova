import { NextResponse } from 'next/server';

// Simple in-memory rate limiting
const rateLimitMap = new Map<string, { count: number; lastReset: number }>();
const RATE_LIMIT = 5; // requests per window
const RATE_WINDOW = 60 * 1000; // 1 minute

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now - entry.lastReset > RATE_WINDOW) {
    rateLimitMap.set(ip, { count: 1, lastReset: now });
    return false;
  }

  if (entry.count >= RATE_LIMIT) {
    return true;
  }

  entry.count++;
  return false;
}

function validateEmail(email: string): boolean {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

export async function POST(request: Request) {
  try {
    // Rate limiting
    const forwarded = request.headers.get('x-forwarded-for');
    const ip = forwarded?.split(',')[0]?.trim() || 'unknown';

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      );
    }

    const body = await request.json();
    const { name, email, service, message } = body;

    // Validation
    if (!name || !email || !service || !message) {
      return NextResponse.json(
        { error: 'All fields are required.' },
        { status: 400 }
      );
    }

    if (name.length < 2 || name.length > 100) {
      return NextResponse.json(
        { error: 'Name must be between 2 and 100 characters.' },
        { status: 400 }
      );
    }

    if (!validateEmail(email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address.' },
        { status: 400 }
      );
    }

    if (message.length < 10 || message.length > 5000) {
      return NextResponse.json(
        { error: 'Message must be between 10 and 5000 characters.' },
        { status: 400 }
      );
    }

    const validServices = ['AI Automation', 'Web Development', 'AI Creative Ads', 'Not Sure'];
    if (!validServices.includes(service)) {
      return NextResponse.json(
        { error: 'Please select a valid service.' },
        { status: 400 }
      );
    }

    // Send email via Resend
    const resendApiKey = process.env.RESEND_API_KEY;
    const contactEmail = process.env.CONTACT_EMAIL || 'contact@aiautonova.com';

    if (resendApiKey) {
      const { Resend } = await import('resend');
      const resend = new Resend(resendApiKey);

      await resend.emails.send({
        from: 'AutoNova Contact <onboarding@resend.dev>',
        to: contactEmail,
        subject: `New Contact: ${name} — ${service}`,
        html: `
          <div style="font-family: 'Inter', sans-serif; max-width: 600px; margin: 0 auto; padding: 32px; background: #0A0A0F; color: #F0F0F5; border-radius: 12px;">
            <h1 style="color: #6C5CE7; margin-bottom: 24px;">New Contact Form Submission</h1>
            <div style="background: #12121A; padding: 24px; border-radius: 8px; border: 1px solid #2A2A3E;">
              <p style="margin: 8px 0;"><strong style="color: #A29BFE;">Name:</strong> ${name}</p>
              <p style="margin: 8px 0;"><strong style="color: #A29BFE;">Email:</strong> <a href="mailto:${email}" style="color: #00D2FF;">${email}</a></p>
              <p style="margin: 8px 0;"><strong style="color: #A29BFE;">Service Interest:</strong> ${service}</p>
              <hr style="border: none; border-top: 1px solid #2A2A3E; margin: 16px 0;" />
              <p style="margin: 8px 0;"><strong style="color: #A29BFE;">Message:</strong></p>
              <p style="color: #A0A0B0; line-height: 1.6;">${message.replace(/\n/g, '<br />')}</p>
            </div>
            <p style="margin-top: 24px; font-size: 12px; color: #6B6B80;">
              Sent from AutoNova website contact form
            </p>
          </div>
        `,
      });
    } else {
      // Log to console if no API key (dev mode)
      console.log('📧 Contact form submission (no RESEND_API_KEY configured):');
      console.log({ name, email, service, message });
    }

    return NextResponse.json({ success: true, message: 'Message sent successfully!' });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Internal server error. Please try again later.' },
      { status: 500 }
    );
  }
}
