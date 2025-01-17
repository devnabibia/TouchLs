import GoogleRecaptchaWrapper from './Recaptcha';

import ContactForm from '@/app/[locale]/membership/ContactForm';

export const metadata = {
  title: 'Contact Us',
  description:
    'Have a question or want to support our cause? Contact us today.',
  keywords:
    'TouchLs, get in touch, support inquiries, volunteer inquiries, donate inquiries, Nairobi Kenya, email, phone number, nonprofit contact, charity contact',
  alternates: {
    canonical: '/en/contact',
    languages: {
      da: '/da/contact',
      pa: '/pa/contact',
    },
  },
  openGraph: {
    title: 'Contact Us - TouchLs',
    description:
      'Have a question or want to support our cause? Contact us today.',
    images: 'https://www.rahafoundation.af/og-image.png',
  },
  twitter: {
    title: 'Contact Us - TouchLs',
    description:
      'Have a question or want to support our cause? Contact us today.',
    images: 'https://www.rahafoundation.af/og-image.png',
  },
};

export default function ContactUs() {
  return (
    <>
      {/* <ContactForm /> */}
      <GoogleRecaptchaWrapper>
        <ContactForm />
      </GoogleRecaptchaWrapper>
    </>
  );
}
