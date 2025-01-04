import { NextRequest, NextResponse } from 'next/server';
import nodemailer, { Transporter } from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';

import adminEmailTemplate from '@/utils/admin-sendinfo-template';

interface EmailRequestBody {
  fullName: string;
  email: string;
  phone: string;
  message: string;
}

export async function POST(request: NextRequest): Promise<NextResponse> {
  const { fullName, email, phone, message }: EmailRequestBody =
    await request.json();

  if (!fullName || !email || !phone || !message) {
    return NextResponse.json(
      { error: 'Missing required fields' },
      { status: 400 }
    );
  }

  const transport: Transporter = nodemailer.createTransport({
    host: 'mail.microcis.net',
    port: 465,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASS,
    },
  });

  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const adminEmails = process.env.ADMIN_EMAILS!.split(',');

  const adminMailOptions = (adminEmail: string): Mail.Options => ({
    from: process.env.EMAIL,
    to: adminEmail,
    subject: `Message from ${fullName} (${email})`,
    html: adminEmailTemplate(fullName, email, phone, message),
  });

  const sendMail = (mailOptions: Mail.Options): Promise<string> => {
    return new Promise((resolve, reject) => {
      transport.sendMail(mailOptions, (err) => {
        if (err) {
          reject(err.message);
        } else {
          resolve('Email sent');
        }
      });
    });
  };

  try {
    await Promise.all(
      adminEmails.map((email) => sendMail(adminMailOptions(email)))
    );

    return NextResponse.json({ message: 'Emails sent' });
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log('error email', err);

    return NextResponse.json({ error: err }, { status: 500 });
  }
}
