export function mapLocalization(locale: string) {
  switch (locale) {
    case 'pa': {
      return 'ps';
    }
    case 'da': {
      return 'fa';
    }
    default:
      return 'en';
  }
}
