'use client';

import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

export default function GoogleRecaptchaWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const recaptcahKey = process?.env?.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

  return (
    <GoogleReCaptchaProvider reCaptchaKey={recaptcahKey ?? 'NOT DEFINED'}>
      {children}
    </GoogleReCaptchaProvider>
  );
}
