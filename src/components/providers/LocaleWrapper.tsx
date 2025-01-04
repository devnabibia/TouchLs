import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';

export default async function LocaleWrapper({
  locale,
  children,
}: {
  locale: string;
  children: React.ReactNode;
}) {
  let messages;

  try {
    messages = (await import(`/messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <NextIntlClientProvider messages={messages} locale={locale}>
      {children}
    </NextIntlClientProvider>
  );
}
