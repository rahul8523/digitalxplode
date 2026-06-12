import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

const bccRecipients = [
  'sud.arora007@gmail.com',
  'info@digitalxplode.com',
  'shweta@digitalxplode.com',
  'kush@digitalxplode.com',
  'dxcampaignleads@gmail.com',
];

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function isValidIndianMobile(value) {
  return /^[6-9]\d{9}$/.test(value);
}

export async function POST(request) {
  try {
    const { companyName, name, email, contact, agree } = await request.json();

    if (!name || !email || !contact || agree !== true) {
      return NextResponse.json({ error: 'Please complete all required fields and agree to the terms.' }, { status: 400 });
    }

    if (!isValidEmail(email)) {
      return NextResponse.json({ error: 'Please enter a valid email address.' }, { status: 400 });
    }

    if (!isValidIndianMobile(contact)) {
      return NextResponse.json({ error: 'Please enter a valid 10-digit Indian mobile number.' }, { status: 400 });
    }

    const mailOptions = {
      from: process.env.SMTP_USER,
      replyTo: email,
      to: 'info@digitalxplode.com',
      bcc: bccRecipients.join(', '),
      subject: `Digital Xplode Form Submission from ${name}`,
      text: `Company Name: ${companyName || 'N/A'}\nName: ${name}\nEmail: ${email}\nContact: ${contact}\n\nThis message was sent from the website contact form.`,
      html: `<p><strong>Company Name:</strong> ${companyName || 'N/A'}</p>
             <p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Contact:</strong> ${contact}</p>
             <p>This message was sent from the website contact form.</p>`,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Your request has been sent successfully.' });
  } catch (error) {
    console.error('Contact form send error:', error);
    return NextResponse.json(
      { error: 'Unable to send the message right now. Please try again later.' },
      { status: 500 }
    );
  }
}
