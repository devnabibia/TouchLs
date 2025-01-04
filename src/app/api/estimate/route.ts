import { NextRequest, NextResponse } from 'next/server';
import nodemailer, { Transporter } from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';

import prisma from '@/lib/prismaDB';

import adminEmailTemplate from '@/utils/admin-estimate';
import customerEmailTemplate from '@/utils/customer-email-template';

interface Email {
  appName: string;
  email: string;
  firstName: string;
  lastName: string;
}

interface Estimate {
  id: string;
  title: string;
  description: string;
  iconLink: string;
  money: number;
  selected: boolean;
}

interface EmailRequest {
  data: Email;
  selectedFeatures: [Estimate];
}

export async function POST(request: NextRequest): Promise<NextResponse> {
  const { data, selectedFeatures }: EmailRequest = await request.json();

  if (!data || !selectedFeatures) {
    return NextResponse.json(
      { error: 'Missing required fields' },
      { status: 400 }
    );
  }

  const transport: Transporter = nodemailer.createTransport({
    service: 'gmail',
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
    subject: `Message from ${data.firstName} ${data.lastName} (${data.email})`,
    html: adminEmailTemplate(data, selectedFeatures),
  });

  const customerMailOptions: Mail.Options = {
    from: process.env.EMAIL,
    to: data.email,
    subject: 'Thank you for contacting us!',
    html: customerEmailTemplate(data.lastName),
  };

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
    // Send emails to all admins
    await Promise.all(
      adminEmails.map((email) => sendMail(adminMailOptions(email)))
    );

    // Send email to the customer
    await sendMail(customerMailOptions);

    // Connect to the database
    // Create the estimate document
    await prisma.estimate.create({
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-ignore
      appName: data.appName,
      email: data.email,
      firstName: data.firstName,
      lastName: data.lastName,
      selectedFeatures: selectedFeatures,
    });

    return NextResponse.json({ message: 'Emails sent and estimate saved' });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
